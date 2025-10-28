import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@api/lib/withAuth";
import User from "../User";

interface Params {
    id: string
}

export async function GET (req: NextRequest, params:  Params): Promise<NextResponse> {

    const id = params.id

    if (!id) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }
    
    return withAuth(async (req: NextRequest, user: User) => {
        return NextResponse.json(id);
    })(req)
}