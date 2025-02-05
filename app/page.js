import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgb(74, 72, 90)'}}>
      <section className="flex items-center min-h-screen">
        <div className="w-1/2 h-screen relative">
          <Image
            src="/images/ha01.png"
            alt="主視覺圖片"
            fill
            style={{objectFit: 'cover'}}
          />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <h1 className="text-9xl font-bold text-white font-serif italic tracking-wider" style={{textShadow: '4px 4px 8px rgba(0,0,0,0.3)', fontFamily: "'Playfair Display', serif"}}>Amia</h1>
        </div>
      </section>

      <section className="py-20 px-10" style={{backgroundColor: 'rgb(74, 72, 90)'}}>
        <h2 className="text-4xl font-bold text-center mb-16 text-white">作品集</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="group relative overflow-hidden aspect-square" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="/images/char01.png"
              width={400}
              height={400}
              alt="作品1"
              className="transition-transform duration-300 group-hover:scale-110 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">作品標題一</h3>
                <p className="text-sm">作品描述文字，可以簡單說明作品內容及特色。</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden aspect-square" data-aos="fade-up" data-aos-delay="200">
            <Image
              src="/images/char02.png"
              width={400} 
              height={400}
              alt="作品2"
              className="transition-transform duration-300 group-hover:scale-110 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">作品標題二</h3>
                <p className="text-sm">作品描述文字，可以簡單說明作品內容及特色。</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden aspect-square" data-aos="fade-up" data-aos-delay="300">
            <Image
              src="/images/char03.png"
              width={400}
              height={400}
              alt="作品3" 
              className="transition-transform duration-300 group-hover:scale-110 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">作品標題三</h3>
                <p className="text-sm">作品描述文字，可以簡單說明作品內容及特色。</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden aspect-square" data-aos="fade-up" data-aos-delay="400">
            <Image
              src="/images/char04.png"
              width={400}
              height={400}
              alt="作品4"
              className="transition-transform duration-300 group-hover:scale-110 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">作品標題四</h3>
                <p className="text-sm">作品描述文字，可以簡單說明作品內容及特色。</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden aspect-square" data-aos="fade-up" data-aos-delay="500">
            <Image
              src="/images/char05.png"
              width={400}
              height={400}
              alt="作品5"
              className="transition-transform duration-300 group-hover:scale-110 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">作品標題五</h3>
                <p className="text-sm">作品描述文字，可以簡單說明作品內容及特色。</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden aspect-square" data-aos="fade-up" data-aos-delay="600">
            <Image
              src="/images/char06.png"
              width={400}
              height={400}
              alt="作品6"
              className="transition-transform duration-300 group-hover:scale-110 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">作品標題六</h3>
                <p className="text-sm">作品描述文字，可以簡單說明作品內容及特色。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
