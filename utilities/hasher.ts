import crypto from 'crypto';

const hasher = (data: string, key: string) =>
  crypto.createHmac("sha256", key).update(data).digest("hex");

export default hasher;