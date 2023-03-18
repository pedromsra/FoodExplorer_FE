import { Container } from "./styles";

import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri"


export function Section({ title, admin = false, children, childrensName }){
    const leftScroll = () => {
        const left = document.querySelector("." + childrensName);
        left.scrollLeft -= 285;
    }
    const rightScroll = () => {
        const right = document.querySelector("." + childrensName);
        right.scrollLeft += 285;
    }

    return (
        <Container>
            <h2>{title}</h2>
            <div className="cover" >
                <button className="left" onClick={() => leftScroll()}><RiArrowLeftSLine size={28} /></button>
                <div className="gradientLeft" />
                <div className={childrensName + " childrensContainer"}>
                    {children}
                </div>
                <div className="gradientRight" />
                <button className="right" onClick={() => rightScroll()}><RiArrowRightSLine size={28} /></button>
            </div>
        </Container>
    )
}