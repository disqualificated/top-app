import React from "react";
import {Button, Htag, P, Tag} from "../components";



export default function Home(): JSX.Element {
  return (
    <>
        <Htag tag='h1'>Заголовок h1</Htag>
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
    </>
  );
}
