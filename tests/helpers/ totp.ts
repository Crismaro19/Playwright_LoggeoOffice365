import dotenv from "dotenv";
dotenv.config();
import * as OTPAuth from "otpauth";

export function generateTOTP(): string {
  const totp = new OTPAuth.TOTP({
    issuer: "Falabella",
    label: process.env.EMAIL_USER,
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: OTPAuth.Secret.fromBase32(process.env.TOTP_SECRET || ""),
  });

  return totp.generate();
}
