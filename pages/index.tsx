import React, {useState} from "react";
import {Button, Htag, P, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";



function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
        <Htag tag='h1'>Заголовок</Htag>
        <Button appearance='primary' arrow='right'>Кнопка</Button>
        <Button appearance='ghost' arrow='down'>Кнопка</Button>
        <P size='l'>Текст абзаца</P>
        <P size='m'>Текст абзаца</P>
        <P size='s'>Текст абзаца</P>
        <Tag size='s'>Тэг</Tag>
        <Tag size='s' color='red'>Тэг</Tag>
        <Tag size='s' color='gray'>Тэг</Tag>
        <Tag size='m' color='green'>Тэг</Tag>
        <Tag size='m' color='primary' href='https://google.com/'>Тэг-ссылка</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating}/>

        <ul>
            {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
        </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
