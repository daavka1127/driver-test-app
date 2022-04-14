import React from "react";
import autorImg from "../../../assets/word.png";
const Banner = () => {
    return (
        <section className="section1">
            <div className="word_bg">
                <div className="container">
                    <p>
                        Байгалиас заяасан үлэмж их авьяастай хүнийг боловсролтой
                        гэдэггүй. Харин мэдэж байгаа бүхнээ ухаалаг, зөв, байж
                        болох хамгийн их ашиг тустайгаар бүтээж байгаа, өөрийх
                        нь мэдлэгт юу дутуу байгааг харж чаддаг хүнийг
                        боловсролтой хүн гэнэ.
                    </p>
                    <div className="img">
                        <img src={autorImg} alt />
                    </div>
                    <div className="content">Иохим Рахэл</div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
