import crypto from "crypto";

const hasher = (data: string, key: string) =>
{
  console.log('data', data)
  console.log('key', key)

  return crypto.createHmac("sha256", key).update(data).digest("hex");

}

export default hasher;