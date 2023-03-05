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
          children={`### 未名俱乐部 My ChatGPT

未名俱乐部基于OpenAI官方ChatGPT API开发的My ChatGPT，能够帮助您与ChatGPT聊天机器人自由互动，获得广泛信息。

未名俱乐部是北大清华校友发起，包含众多海内外知名高校校友的高端社群，以就业创业、投融资、联谊交友为主题！欢迎各高校朋友加入，公众号：pkuclub，联系人：pkuboyata（添加微信发送：学校-专业学历-姓名）。

致谢：北京大学[Gabriel Wu](https://github.com/lucifer1004)博士为本站提供源代码及技术支持。

提示：建议使用chrome、edge、firefox等浏览器打开本网站，效果最佳。`}
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
