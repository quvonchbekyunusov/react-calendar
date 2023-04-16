import { request } from "./request"

export const getEvents = async () => {
    const response = await request({
        url: '/events',
        nethod: 'GET',
    })
    return response.data
}

export const getEvent = async (id: any) => {
    const response = await request({
        url: '/events/'+id,
        nethod: 'GET',
    })
    return response.data
}