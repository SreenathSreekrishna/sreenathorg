import './gallery.css';

const Gallery = () => {
    const images = [
        {img:'20230324_172450.jpg', tall:false, wide: true},
        {img:'IMG_3630.JPG', tall:false, wide: true},
        {img:'IMG_6162.JPG', tall:false, wide: false},
        {img:'IMG_5453.JPG', tall:false, wide: false},
        {img:'IMG_4234.JPG', tall:false, wide: false},
        {img:'IMG_1017.JPG', tall:false, wide: false},
        {img:'minerals.jpg', tall:true, wide: true},
        {img:'anandam.jpeg', tall:false, wide: false},
        {img:'pic.jpeg', tall:false, wide: true},
        {img:'IMG_5410.JPG', tall:false, wide: true},
    ];
    return <div className="gallery">
        <div className="heading font-primary">Gallery</div>
        <div className="gallery-container">
            {
                images.map((e,i) => {
                    let classes = ["gallery-item"];
                    if (e.wide) {
                        classes.push("wide")
                    }
                    if (e.tall) {
                        classes.push("tall");
                    }
                    return <div className={classes.join(" ")}
                                style={{'--img':`url('/assets/images/${e.img}')`}}
                                key={i}
                            >
                            </div>
                })
            }
        </div>
    </div>
}

export default Gallery;