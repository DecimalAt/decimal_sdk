import { BytesLike, ethers } from "ethers";
import fetch from "node-fetch";

interface AttestationResponse {
  attestation_document: BytesLike;
  secp_key: BytesLike;
}

interface PCRS {
  PCR0: BytesLike;
  PCR1: BytesLike;
  PCR2: BytesLike;
}

export class Attestor {
  protected attestation_utility_endpoint: string;
  protected attestation_verifier_endpoint: string;

  constructor(
    attestation_utility_endpoint: string,
    attestation_verifier_endpoint: string,
  ) {
    this.attestation_utility_endpoint = attestation_utility_endpoint;
    this.attestation_verifier_endpoint = attestation_verifier_endpoint;
  }

  protected utilityUrl(api: string): string {
    return `${this.attestation_utility_endpoint}${api}`;
  }

  protected baseUrl(url: string, api: string): string {
    return `${url}${api}`;
  }

  public async getAttestation(
    printAttestation: boolean = false,
  ): Promise<AttestationResponse> {
    const attestation_build_data = await this.buildAttestation();
    if (printAttestation) {
      console.log({ attestation_build_data });
    }

    let verify_attestation_config = {
      method: "POST",
      headers: { "Content-Type": "application/octet-stream" },
      body: attestation_build_data,
    };

    let attestation_verifier_response = await fetch(
      this.baseUrl(this.attestation_verifier_endpoint, "/verify/raw"),
      verify_attestation_config,
    );
    if (!attestation_verifier_response.ok) {
      console.log({ attestation_verifier_response });
      throw new Error("Failed Getting Repsonse from attestation verifier");
    }

    let attestation_verifier_reponse_data =
      await attestation_verifier_response.json();
    if (printAttestation) {
      console.log({ attestation_verifier_reponse_data });
    }

    let ecies_pubkey =
      "0x" + attestation_verifier_reponse_data.secp256k1_public.toString();

    if (ecies_pubkey.length != 130) {
      throw new Error("secp pub key length incorrect");
    }

    let abiCoder = new ethers.AbiCoder();
    let encodedData = abiCoder.encode(
      ["bytes", "bytes", "bytes", "bytes", "bytes", "uint256"],
      [
        "0x" + attestation_verifier_reponse_data.signature,
        ecies_pubkey,
        "0x" + attestation_verifier_reponse_data.pcr0,
        "0x" + attestation_verifier_reponse_data.pcr1,
        "0x" + attestation_verifier_reponse_data.pcr2,
        "" + attestation_verifier_reponse_data.timestamp,
      ],
    );

    if (printAttestation) {
      console.log({ encodedData });
    }

    return { attestation_document: encodedData, secp_key: ecies_pubkey };
  }

  private async buildAttestation(): Promise<any> {
    const attestation_end_point = this.utilityUrl("/attestation/raw");
    let attestation_build_config = {
      method: "GET",
    };
    let attestation_server_response = await fetch(
      attestation_end_point,
      attestation_build_config,
    );
    if (!attestation_server_response.ok) {
      console.log({ attestation_server_response });
      throw new Error("Failed Building the attestation");
    }

    return await attestation_server_response.body;
  }

  public static getPcrsBytesFromAttestation(
    attestationData: BytesLike,
  ): BytesLike {
    let abiCoder = new ethers.AbiCoder();
    let decoded = abiCoder.decode(
      ["bytes", "bytes", "bytes", "bytes", "bytes", "uint256"],
      attestationData,
    );
    console.log("pcrs", decoded[2], decoded[3], decoded[4]);

    let encoded = abiCoder.encode(
      ["bytes", "bytes", "bytes"],
      [decoded[2], decoded[3], decoded[4]],
    );
    return encoded;
  }

  public static getPCRsFromAttestation(attestationData: BytesLike): PCRS {
    let abiCoder = new ethers.AbiCoder();
    let decoded = abiCoder.decode(
      ["bytes", "bytes", "bytes", "bytes", "bytes", "uint256"],
      attestationData,
    );
    console.log("pcrs", decoded[2], decoded[3], decoded[4]);

    return { PCR0: decoded[2], PCR1: decoded[3], PCR2: decoded[4] };
  }

  public static getImageIdFromAttestation(
    attestationData: BytesLike,
  ): BytesLike {
    let abiCoder = new ethers.AbiCoder();
    let decoded = abiCoder.decode(
      ["bytes", "bytes", "bytes", "bytes", "bytes", "uint256"],
      attestationData,
    );

    let encoded = ethers.solidityPacked(
      ["bytes", "bytes", "bytes"],
      [decoded[2], decoded[3], decoded[4]],
    );

    return ethers.keccak256(encoded);
  }
}
