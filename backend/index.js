import axios from "axios";

const instance = axios.create({
  baseURL: `/api/`,
  withCredentials: true,
});

export async function post(route, body = {}) {
  return await instance
    .post(`${route}`, body)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

export async function createTransaction(recipientAddress, utxos) {
  return await post(`create-mining-transaction`, { recipientAddress, utxos });
}

export async function signTransaction(assetName, signedTx, originalMetadata) {
  return await post(`sign-transaction`, {
    assetName,
    signedTx,
    originalMetadata,
  });
}
