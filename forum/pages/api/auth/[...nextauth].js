import {connectDB} from "@utils/database"
import { MongoDBAdapter} from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers : [
        GithubProvider({
            clientId : 'Ov23lisQHkvN3NqJb2Te',
            clientSecret : '8f9dace41ae77f2c212053023e33aba061edaa06'
        })
    ],
    secret : 'qwer1234',
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);