import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Markdown from "../components/Markdown";
import { MyChatGPTContext } from "../contexts/MyChatGPTContext";

export default function Home() {
  const router = useRouter();
  const { dispatch } = useContext(MyChatGPTContext);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Markdown
          disableCopy
          children={`### My ChatGPT - 未名俱乐部聊天机器人

My ChatGPT是一款基于OpenAI官方ChatGPT API开发的个人聊天机器人站点，能够帮助您在本土网络下与ChatGPT官方聊天机器人互动并获得信息。

感谢原作者[Gabriel Wu](https://github.com/lucifer1004)提供技术支持。

`}
        />
        <Button
          onClick={() => {
            const newId = uuidv4();
            dispatch({ type: "create", chatId: newId });
            router.push(`/chats/${newId}`);
          }}
          className="mt-5 flex w-full items-center justify-center dark:text-slate-600 lg:hidden"
          title="开始一个新对话（当前对话将被自动保存）"
        >
          <ChatBubbleLeftRightIcon
            className="h-6 text-indigo-300"
            aria-hidden="true"
          />
          立刻开始对话
        </Button>
      </div>
    </Layout>
  );
}
