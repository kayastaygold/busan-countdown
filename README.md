# 釜山跨年 2026→2027

給旅伴看的行程網站，網址：https://kayastaygold.github.io/busan-countdown/

- 內容都在 `data.js`，改行程、打勾待辦只要改這個檔案
- 顏色、字體在 `theme.css`（Memphis 風：粉、紫、黃、藍），換配色只改這個檔案
- 版面和動畫在 `style.css`，圖示在 `icons.js`，景點小圖在 `art.js`（都是自己畫的 SVG）
- 景點文字在 `data.js` 的 `spots`：`short` 一句話、`facts` 幾個重點
- 愛心按鈕在 `likes.js`，資料存在 Firebase Firestore
- 純靜態網頁，不需要建置

英文和數字用的字體是 [Anton](https://github.com/googlefonts/AntonFont)（SIL Open Font License 1.1），檔案在 `fonts/`。

## 照片來源

`photos/` 裡的照片來自 [Wikimedia Commons](https://commons.wikimedia.org/)，裁成 960×640。作者和授權如下（網站上每張照片下面也有標示）：

- `photos/blueline.jpg`：[Sky Capsule train at Haeundae Blueline Park, Busan.jpg](https://commons.wikimedia.org/wiki/File:Sky_Capsule_train_at_Haeundae_Blueline_Park,_Busan.jpg)，VN.NguyenDucDuy，CC BY-SA 4.0
- `photos/dongbaek.jpg`：[Nurimaru APEC House 20200522 002.jpg](https://commons.wikimedia.org/wiki/File:Nurimaru_APEC_House_20200522_002.jpg)，Mobius6，CC BY-SA 4.0
- `photos/gamcheon.jpg`：[Gamcheon Culture Village March 30 2024 7.jpg](https://commons.wikimedia.org/wiki/File:Gamcheon_Culture_Village_March_30_2024_7.jpg)，S h y numis，CC BY 4.0
- `photos/gwangan.jpg`：[Gwangan Bridge and Gwangalli Beach - Gwangalli2721.jpg](https://commons.wikimedia.org/wiki/File:Gwangan_Bridge_and_Gwangalli_Beach_-_Gwangalli2721.jpg)，lumoplank，CC0
- `photos/gyeongju.jpg`：[Bulguksa temple entrance gate stairs flower bed and blue sky in Gyeongju South Korea.jpg](https://commons.wikimedia.org/wiki/File:Bulguksa_temple_entrance_gate_stairs_flower_bed_and_blue_sky_in_Gyeongju_South_Korea.jpg)，Basile Morin，CC BY-SA 4.0
- `photos/haeundae-beach.jpg`：[Haeundae Beach NightView.jpg](https://commons.wikimedia.org/wiki/File:Haeundae_Beach_NightView.jpg)，Haeundae District Municipality，CC BY 4.0
- `photos/haeundae-market.jpg`：[Korea-Busan-Haeundae Market-Bokkeumbap-Fried rice-01.jpg](https://commons.wikimedia.org/wiki/File:Korea-Busan-Haeundae_Market-Bokkeumbap-Fried_rice-01.jpg)，Junho Jung，CC BY-SA 3.0
- `photos/huinnyeoul.jpg`：[흰여울마을.jpg](https://commons.wikimedia.org/wiki/File:%ED%9D%B0%EC%97%AC%EC%9A%B8%EB%A7%88%EC%9D%84.jpg)，Appleysj，CC BY-SA 4.0
- `photos/jagalchi.jpg`：[Jagalchi Market 20200523 019.jpg](https://commons.wikimedia.org/wiki/File:Jagalchi_Market_20200523_019.jpg)，Mobius6，CC BY-SA 4.0
- `photos/jeonpo.jpg`：[Ardea cinerea - Grey heron - in a pond of Busan Citizens Park with blue sky in Busan city South Korea.jpg](https://commons.wikimedia.org/wiki/File:Ardea_cinerea_-_Grey_heron_-_in_a_pond_of_Busan_Citizens_Park_with_blue_sky_in_Busan_city_South_Korea.jpg)，Basile Morin，CC BY-SA 4.0
- `photos/seomyeon.jpg`：[Seomyeon, Busan.jpg](https://commons.wikimedia.org/wiki/File:Seomyeon,_Busan.jpg)，Carey Ciuro，CC BY 2.0
- `photos/shinsegae-centum.jpg`：[Shinsegye Dept store Centum city.JPG](https://commons.wikimedia.org/wiki/File:Shinsegye_Dept_store_Centum_city.JPG)，Modamoda，CC BY-SA 3.0
- `photos/songdo.jpg`：[Songdo Cloud Trails Skywalk Songdo Beach Busan (30809005967).jpg](https://commons.wikimedia.org/wiki/File:Songdo_Cloud_Trails_Skywalk_Songdo_Beach_Busan_(30809005967).jpg)，bryan...，CC BY-SA 2.0
- `photos/spaland.jpg`：[Spaland centunm.jpg](https://commons.wikimedia.org/wiki/File:Spaland_centunm.jpg)，Jaewon911，CC0
- `photos/taejongdae.jpg`：[Taejongdae in 2018.jpg](https://commons.wikimedia.org/wiki/File:Taejongdae_in_2018.jpg)，Christophe95，CC BY-SA 4.0
- `photos/xthesky.jpg`：[Haeundae Beach 20200522 005.jpg](https://commons.wikimedia.org/wiki/File:Haeundae_Beach_20200522_005.jpg)，Mobius6，CC BY-SA 4.0
- `photos/yonggungsa.jpg`：[Haedong Yonggungsa Temple, Busan, South Korea.jpg](https://commons.wikimedia.org/wiki/File:Haedong_Yonggungsa_Temple,_Busan,_South_Korea.jpg)，Anna L Martin，CC BY 2.0
