'use client'
import { useEffect, useState } from 'react'
import Spinnertailwind from '../../components/Spinnertailwind'

const page = ({ params }: { params: { slug: string } }) => {

    const [data, setData] = useState<any[] | any>(null)
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <Spinnertailwind />
    if (!data) return <p>No Data</p>

    return (
        <div>
            My user id : <span>{params.slug}</span>
            <hr />
            <ul>
                {data.map((items: ContentType) => (
                    <>
                        <li key={items.id}>
                            <span>{items.id}</span>
                            {`. `}
                            <span>{items.title}</span>
                        </li>

                    </>
                ))}
            </ul>
        </div>
    )
}

type ContentType = {
    id: number,
    title: string,
};

export default page


