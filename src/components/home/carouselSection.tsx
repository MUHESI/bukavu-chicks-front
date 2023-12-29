import React from 'react'
import img4 from '@/assets/images/img4.png'
import img5 from '@/assets/images/img5.png'
import img6 from '@/assets/images/img6.png'
import jengaMwili from '@/assets/jengaMwili.png'
import jengaMwiliPreview from '@/assets/imagePreview.png'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import '@/styles/carouselStyle.css'

//TODO: Improve later
function Carousel() {
    return (
        <div className='mt-20'>
            <div className="carousel">
                <div className="list">
                    <div className="item">
                        <img src={jengaMwiliPreview} alt="..." />
                        <div className="introduce">
                            <div className="topic">Jenga Mwili</div>
                            <div className="des">
                                {/* <!-- 20 lorem --> */}
                                Poulet de chair bio de la ferme Bukavu Chicks, nourri aux céréales bio du Kivu. Commander en ligne

                                Œufs frais issus d’un élevage respectant la biosécurité et les normes avicoles et nutritionnelles. Commander en ligne

                                Poussins d’un jour disponibles sur commande grâce à nos incubateurs modernes (capacité globale de 144 000 œufs à couver).

                                Aliments pour poules adaptés selon leur âge, avec un accompagnement pour les opérateurs du secteur avicole.
                            </div>
                            <button className="seeMore">SEE MORE &#8599</button>
                        </div>
                        <div className="detail">
                            <div className="title">Aerphone GHTK</div>
                            <div className="des">
                                {/* <!-- lorem 50 --> */}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                            </div>
                            <div className="specifications">
                                <div>
                                    <p>Used Time</p>
                                    <p>6 hours</p>
                                </div>
                                <div>
                                    <p>Charging port</p>
                                    <p>Type-C</p>
                                </div>
                                <div>
                                    <p>Compatible</p>
                                    <p>Android</p>
                                </div>
                                <div>
                                    <p>Bluetooth</p>
                                    <p>5.3</p>
                                </div>
                                <div>
                                    <p>Controlled</p>
                                    <p>Touch</p>
                                </div>
                            </div>
                            <div className="checkout">
                                <button>ADD TO CART</button>
                                <button>CHECKOUT</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={jengaMwili} alt="..." />
                        <div className="introduce">
                            <div className="topic">Jenga Mwili</div>
                            <div className="des">
                                {/* <!-- 20 lorem --> */}
                                Poulet de chair bio de la ferme Bukavu Chicks, nourri aux céréales bio du Kivu. Commander en ligne

                                Œufs frais issus d’un élevage respectant la biosécurité et les normes avicoles et nutritionnelles. Commander en ligne

                                Poussins d’un jour disponibles sur commande grâce à nos incubateurs modernes (capacité globale de 144 000 œufs à couver).

                                Aliments pour poules adaptés selon leur âge, avec un accompagnement pour les opérateurs du secteur avicole.
                            </div>
                            <button className="seeMore">VOIR PLUS</button>
                        </div>
                        <div className="detail">
                            <div className="title">Aerphone GHTK</div>
                            <div className="des">
                                {/* <!-- lorem 50 --> */}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                            </div>
                            <div className="specifications">
                                <div>
                                    <p>Used Time</p>
                                    <p>6 hours</p>
                                </div>
                                <div>
                                    <p>Charging port</p>
                                    <p>Type-C</p>
                                </div>
                                <div>
                                    <p>Compatible</p>
                                    <p>Android</p>
                                </div>
                                <div>
                                    <p>Bluetooth</p>
                                    <p>5.3</p>
                                </div>
                                <div>
                                    <p>Controlled</p>
                                    <p>Touch</p>
                                </div>
                            </div>
                            <div className="checkout">
                                <button>ADD TO CART</button>
                                <button>CHECKOUT</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={jengaMwiliPreview} alt="..." />
                        <div className="introduce">
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">Aerphone</div>
                            <div className="des">
                                {/* <!-- 20 lorem --> */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                            </div>
                            <button className="seeMore">SEE MORE &#8599</button>
                        </div>
                        <div className="detail">
                            <div className="title">Aerphone GHTK</div>
                            <div className="des">
                                {/* <!-- lorem 50 --> */}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                            </div>
                            <div className="specifications">
                                <div>
                                    <p>Used Time</p>
                                    <p>6 hours</p>
                                </div>
                                <div>
                                    <p>Charging port</p>
                                    <p>Type-C</p>
                                </div>
                                <div>
                                    <p>Compatible</p>
                                    <p>Android</p>
                                </div>
                                <div>
                                    <p>Bluetooth</p>
                                    <p>5.3</p>
                                </div>
                                <div>
                                    <p>Controlled</p>
                                    <p>Touch</p>
                                </div>
                            </div>
                            <div className="checkout">
                                <button>ADD TO CART</button>
                                <button>CHECKOUT</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={img4} alt="..." />
                        <div className="introduce">
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">Aerphone</div>
                            <div className="des">
                                {/* <!-- 20 lorem --> */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                            </div>
                            <button className="seeMore">SEE MORE &#8599</button>
                        </div>
                        <div className="detail">
                            <div className="title">Aerphone GHTK</div>
                            <div className="des">
                                {/* <!-- lorem 50 --> */}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                            </div>
                            <div className="specifications">
                                <div>
                                    <p>Used Time</p>
                                    <p>6 hours</p>
                                </div>
                                <div>
                                    <p>Charging port</p>
                                    <p>Type-C</p>
                                </div>
                                <div>
                                    <p>Compatible</p>
                                    <p>Android</p>
                                </div>
                                <div>
                                    <p>Bluetooth</p>
                                    <p>5.3</p>
                                </div>
                                <div>
                                    <p>Controlled</p>
                                    <p>Touch</p>
                                </div>
                            </div>
                            <div className="checkout">
                                <button>ADD TO CART</button>
                                <button>CHECKOUT</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={img5} alt="..." />
                        <div className="introduce">
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">Aerphone</div>
                            <div className="des">
                                {/* <!-- 20 lorem --> */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                            </div>
                            <button className="seeMore">SEE MORE &#8599</button>
                        </div>
                        <div className="detail">
                            <div className="title">Aerphone GHTK</div>
                            <div className="des">
                                {/* <!-- lorem 50 --> */}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                            </div>
                            <div className="specifications">
                                <div>
                                    <p>Used Time</p>
                                    <p>6 hours</p>
                                </div>
                                <div>
                                    <p>Charging port</p>
                                    <p>Type-C</p>
                                </div>
                                <div>
                                    <p>Compatible</p>
                                    <p>Android</p>
                                </div>
                                <div>
                                    <p>Bluetooth</p>
                                    <p>5.3</p>
                                </div>
                                <div>
                                    <p>Controlled</p>
                                    <p>Touch</p>
                                </div>
                            </div>
                            <div className="checkout">
                                <button>ADD TO CART</button>
                                <button>CHECKOUT</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={img6} alt="..." />
                        <div className="introduce">
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">Aerphone</div>
                            <div className="des">
                                {/* <!-- 20 lorem --> */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                            </div>
                            <button className="seeMore">SEE MORE &#8599</button>
                        </div>
                        <div className="detail">
                            <div className="title">Aerphone GHTK</div>
                            <div className="des">
                                {/* <!-- lorem 50 --> */}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                            </div>
                            <div className="specifications">
                                <div>
                                    <p>Used Time</p>
                                    <p>6 hours</p>
                                </div>
                                <div>
                                    <p>Charging port</p>
                                    <p>Type-C</p>
                                </div>
                                <div>
                                    <p>Compatible</p>
                                    <p>Android</p>
                                </div>
                                <div>
                                    <p>Bluetooth</p>
                                    <p>5.3</p>
                                </div>
                                <div>
                                    <p>Controlled</p>
                                    <p>Touch</p>
                                </div>
                            </div>
                            <div className="checkout">
                                <button>ADD TO CART</button>
                                <button>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arrows">
                    <button id="prev" className='flex justify-center items-center border border-2 hover:border-[#5e0000] transition rounded-full w-10' ><FaChevronLeft /> </button>
                    <button id="next" className='flex justify-center items-center border border-2 hover:border-[#5e0000] transition rounded-full w-10'> <FaChevronRight /></button>
                    <button id="back">Voir tout</button>
                </div>
            </div>
        </div>
    )
}

export default Carousel


