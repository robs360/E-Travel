import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    }),
    CredentialsProvider({

      name: "Credentials",

      credentials: {
     
      },
      async authorize(credentials, req) {

        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        if (user) {

          return user
        } else {

          return null

        }
      }
    })
  ],
  pages: {
    signIn: "/login",      
  },
  secret: process.env.NEXTAUTH_SECRET
}
