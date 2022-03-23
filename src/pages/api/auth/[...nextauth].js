import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { redirect } from "next/dist/server/api-utils"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "secret token",
    encryption: true
  },
  callbacks: {
    async jwt({token, account}) {
      console.log("account", account)
      console.log("token", token)
      if (account ?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token;
    },
    async redirect({url, _baseUrl}) {
      if (url === '/dashboard') {
        return Promise.resolve('/');
      }
      return Promise.resolve('/');
    },
  }
})