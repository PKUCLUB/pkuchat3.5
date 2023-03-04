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
          children={`### 未名俱乐部 - My ChatGPT

My ChatGPT是未名俱乐部为您提供的一款聊天机器人站点，它基于OpenAI官方的ChatGPT API开发而成，能够帮助您在本土网络环境下，实现与ChatGPT官方聊天机器人自由互动，并获得广泛信息。

未名俱乐部是由北大、清华校友发起，包含众多海内外知名高校校友的高端交流平台，欢迎您的加入！我们的微信公众号ID：PKUCLUB，联系人：pkuboyata

感谢原作者[Gabriel Wu](https://github.com/lucifer1004)提供技术支持。`}
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
