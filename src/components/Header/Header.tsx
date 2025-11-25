import { type JSX } from "react";
import Style from "./Header.module.css";

export default function Header(): JSX.Element
{
    return (
        <header className={Style.default_header}>
            <div className="default_container_centralize">
                <h1 className={Style.default_header_title}><span>Code</span>Lab</h1>
                <input className={Style.default_header_input} type="text" placeholder="Pesquise no blog" />
            </div>
        </header>
    );
}