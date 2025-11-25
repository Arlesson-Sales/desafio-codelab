import { type JSX, useState } from "react";
import { HeartIcon } from "lucide-react";
import Style from "./Post.module.css";

interface PostProps {
    date: string;
    title: string;
    description: string;
};

export default function Post({ date, title, description }: PostProps): JSX.Element
{
    const [ liked, setLike ] = useState<boolean>(() => false);

    return (
        <article className={Style.post_section}>
            <div>
                <time>{ date }</time>
                <HeartIcon onClick={() => setLike((prevValue: boolean) => !prevValue)} className={liked ? Style.heart_icon_liked : Style.heart_icon_style} />
            </div>
            <div>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </div>
        </article>
    );
}