import { NextResponse } from "next/server";

interface Props {
    params: Promise<{ id: number }>
}
//https://medium.com/@ayonaalex2/params-search-params-resolved-as-promise-in-next-js-15-444317307481
//IMPORTANT: the name of parameter in the directory path MUST BE EQUAL to the one used in code!!!
//https://www.youtube.com/watch?v=k7o9R6eaSes
export async function GET(request: Request, { params }: Props) {
    //ATTENZIONE ALLE DIFFERENZE!!!
    const { id } = await params; // --> ritorna oggetto {"id":"1233"}
    //const { id } = await params; --> ritorna il numero 123
    console.log(id)
    if (id > 10)
        return NextResponse.json({ error: 'user not found' }, { status: 404 })

    return Response.json({ id: id });
}