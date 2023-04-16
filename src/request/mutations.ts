import { request } from "./request"

export const createEvent = async (data: any) => {
    const response = await request({
        url: '/events',
        data: data,
        method: 'POST',
    })
    return response.data
}

export const editEvent = async (data: any) => {
    const response = await request({
        url: '/events/'+ data?.id,
        data: data,
        nethod: 'PUT',
    })
    return response.data
}

export const deleteEvent = async (id: any) => {
    const response = await request({
        url: '/events/'+ id,
        nethod: 'DELETE',
    })
    return response.data
}