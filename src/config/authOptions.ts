import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      profile(profile) {
        let userRole = "student"

        const creatorsEmailArray = [
          "faizanabbasi00123@gmail.com",
          "pratik@trypolymath.ai",
        ]

        if (creatorsEmailArray.includes(profile.email)) {
          userRole = "creator"
        }

        // if (
        //   profile.email === "direghost001@gmail.com" ||
        //   "tanmay@trypolymath.ai" ||
        //   "anzarhps@gmail.com"
        // ) {
        //   userRole = "teacher"
        // }

        const teachersEmailArray = [
          "direghost001@gmail.com",
          "tanmay@trypolymath.ai",
        ]

        if (teachersEmailArray.includes(profile.email)) {
          userRole = "teacher"
        }

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        }
      },
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role
      }
      return session
    },
  },
}
