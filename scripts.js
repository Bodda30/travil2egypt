<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discover Egypt - Plan Your Trip</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1 id="header-title">Discover Egypt</h1>
        <button id="language-toggle">Change to Korean</button>
        <nav>
            <a href="#about" class="nav-link">About</a>
            <a href="#Gallery" class="nav-link">Gallery</a>
            <a href="#chooseCar" class="nav-link">Choose your car</a>
            <a href="#trip-form" class="nav-link">Plan Your Trip</a>
            <a href="#contact" class="nav-link">Contact</a>
        </nav>
    </header>

    <!-- About Section (English) -->
    <section id="about" class="fade-in english">
        <h2>About Us</h2>
        <p>
            Discover Egypt offers the ultimate guide to exploring the beauty and history of Egypt. From majestic pyramids to serene beaches, our mission is to help you experience the wonders of Egypt.
        </p>
    </section>

    <!-- About Section (Korean) -->
    <section id="about-korean" class="fade-in korean">
        <h2>우리에 대해</h2>
        <p>
            Discover Egypt는 이집트의 아름다움과 역사를 탐험할 수 있는 궁극적인 가이드를 제공합니다. 웅장한 피라미드부터 평화로운 해변까지, 우리의 임무는 여러분이 이집트의 경이로움을 경험할 수 있도록 돕는 것입니다.
        </p>
    </section>

    <!-- Gallery Section (English) -->
    <section id="Gallery" class="fade-in english">
        <h2>Gallery</h2>
        <div class="carousel">
            <div class="carousel-wrapper">
                <div class="carousel-item">
                    <figure>
                        <img src="https://images.pexels.com/photos/3185480/pexels-photo-3185480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pyramids">
                        <figcaption>Pyramids</figcaption>
                    </figure>
                </div>
                <div class="carousel-item">
                    <figure>
                        <img src="https://images.pexels.com/photos/6523537/pexels-photo-6523537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sakara Pyramid">
                        <figcaption>Saqqara pyramid</figcaption>
                    </figure>
                </div>
                <div class="carousel-item">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1729956816147-92d4d2ef48ac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="khan El-khalili">
                        <figcaption>khan El-khalili</figcaption>
                    </figure>
                </div>
                <div class="carousel-item">
                    <figure>
                        <img src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/318035/2000x2000-0-70-60f838d50ea9538464db82be94c986f3.jpg" alt="Siwa salt lake">
                        <figcaption>Siwa salt lake</figcaption>
                    </figure>
                    <div class="carousel-item">
                        <figure>
                            <img src="https://images.pexels.com/photos/23030586/pexels-photo-23030586/free-photo-of-people-in-abu-simbel-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Luxor">
                            <figcaption>Luxor</figcaption>
                        </figure>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section (Korean) -->
    <section id="gallery-korean" class="fade-in korean">
        <h2>갤러리</h2>
        <div class="carousel">
            <div class="carousel-wrapper">
                <div class="carousel-item">
                    <figure>
                        <img src="https://images.pexels.com/photos/3185480/pexels-photo-3185480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="피라미드">
                        <figcaption>피라미드</figcaption>
                    </figure>
                </div>
                <div class="carousel-item">
                    <figure>
                        <img src="https://images.pexels.com/photos/6523537/pexels-photo-6523537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="사카라피라미드">
                        <figcaption>사카라피라미드</figcaption>
                    </figure>
                </div>
                <div class="carousel-item">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1729956816147-92d4d2ef48ac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="칸앤칼릴리시장">
                        <figcaption>칸앤칼릴리시장</figcaption>
                    </figure>
                </div>
                <div class="carousel-item">
                    <figure>
                        <img src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/318035/2000x2000-0-70-60f838d50ea9538464db82be94c986f3.jpg" alt="시와-소금호수">
                        <figcaption>시와-소금호수</figcaption>
                    </figure>
                </div>
                <div class="carousel-item">
                    <figure>
                        <img src="https://images.pexels.com/photos/23030586/pexels-photo-23030586/free-photo-of-people-in-abu-simbel-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="룩소르">
                        <figcaption>룩소르</figcaption>
                    </figure>
                </div>
            </div>
            </div>
        </div>
    </section>

 !<!-- Services Section -->
 <section id="services">
     <!-- English Version -->
     <div class="services-content" id="services-english">
         <h2>Our Services</h2>
         <div class="service-item">
             <span>Airport Transfer</span>
             <span class="price">25 US$</span>
             <button class="service-button">Contact us now</button>
         </div>
         <div class="service-item">
             <span>Cairo City Tour</span>
             <span class="price">60 US$</span>
             <button class="service-button">Contact us now</button>
         </div>
         <div class="service-item">
             <span>Custom Day Trip</span>
             <span class="price"></span>
             <button class="service-button">Contact us now</button>
         </div>
         <div class="service-item">
             <span>Siwa transfer</span>
             <span class="price">300 US$</span>
             <button class="service-button">Contact us now</button>
         </div>
     </div>
 
     <!-- Korean Version -->
     <div class="services-content" id="services-korean" style="display: none;">
         <h2>우리의 서비스</h2>
         <div class="service-item">
             <span>공항 픽업 서비스</span>
             <span class="price">25 US$</span>
             <!-- Removed button -->
         </div>
         <div class="service-item">
             <span>카이로 시티 투어</span>
             <span class="price">60 US 부터</span>
             <!-- Removed button -->
         </div>
         <div class="service-item">
             <span>다른지역 맞춤투어(맞춤투어)</span>
             <span class="price">문의하기</span>
             <!-- Removed button -->
         </div>
         <div class="service-item">
             <span>시와 왕복차량</span>
             <span class="price">300 US 부터</span>
             <!-- Removed button -->
         </div>

         <div class="service-item">
            <span>룩소르, 아스완 맞춤 일정가능</span>
         
            <!-- Removed button -->
            <div class="service-item">
                <span>카카오톡으로 모든 여정 문의시 할인가능</span>
        </div>
     </div>
 </section>

<!-- Choose Your Car Section -->
<section id="chooseCar">
    <h2 class="english">Choose Your Car</h2>
    <h2 class="korean">차량 선택</h2>
    <div class="car-gallery">
        <div class="car-item">
            <img src="path/to/sedan.jpg" alt="Sedan">
            <h3 class="english">Sedan</h3>
            <h3 class="korean">세단</h3>
            <p class="english">Comfortable sedan for city tours</p>
            <p class="korean">도시 투어를 위한 편안한 세단</p>
        </div>
        <div class="car-item">
            <img src="path/to/suv.jpg" alt="SUV">
            <h3 class="english">SUV</h3>
            <h3 class="korean">SUV</h3>
            <p class="english">comfortable and safe SUV for long trips</p>
            <p class="korean"> 안전하고 편안한 여정을 위한 차량</p>
        </div>
        <div class="car-item">
            <img src="https://images.unsplash.com/photo-1722088354375-3c64b4d994b6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Convertible">
            <h3 class="english">High Van</h3>
            <h3 class="korean">벤 </h3>
            <p class="english">for more 5people</p>
            <p class="korean">5 인 이상을 위한 차량 (최대 10명)</p>
        </div>
    </div>
</section>

<!-- Plan Trip Section (English) -->
<section id="trip-form" class="fade-in english">
    <h2>Plan Your Trip</h2>
    <form id="tripFormEnglish">
        <select name="destination" required>
            <option value="" disabled selected>Choose a Destination</option>
            <option value="Cairo">Cairo</option>
            <option value="Luxor">Luxor</option>
            <option value="Aswan">Aswan</option>
        </select>
        <input type="date" name="travel-date" required>
        <input type="number" name="travelers" placeholder="Number of Travelers" required>
        <textarea name="message" placeholder="Additional Information"></textarea>
        <input type="email" name="email" placeholder="Your Email" required>
        <!-- Honeypot input to prevent spam -->
        <input type="hidden" name="_gotcha" style="display:none !important">
        <button type="submit">Submit</button>
    </form>
</section>

<!-- Plan Trip Section (Korean) -->
<section id="trip-form-korean" class="fade-in korean">
    <h2>예약문의</h2>
    <form id="tripFormKorean">
        <select name="destination" required>
            <option value="" disabled selected>목적지 선택</option>
            <option value="Cairo">카이로</option>
            <option value="Luxor">룩소르</option>
            <option value="Aswan">아스완</option>
        </select>
        <input type="date" name="travel-date" required>
        <input type="number" name="travelers" placeholder="여행자 수" required>
        <textarea name="message" placeholder="인원/날짜(0박0일)/캐리어갯수"></textarea>
        <input type="email" name="email" placeholder="이메일" required>
        <!-- Honeypot input to prevent spam -->
        <input type="hidden" name="_gotcha" style="display:none !important">
        <button type="submit">제출</button>
    </form>
</section>

<!-- Include EmailJS SDK -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
    (function () {
        emailjs.init("public_01VhV64gOdkVKx9jQ"); // Replace with your EmailJS user ID
    })();

    document.getElementById('tripFormEnglish').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_stb1w38', 'template_ue5kf3f', this)
            .then(function() {
                alert('Your trip plan has been submitted successfully!');
            }, function(error) {
                alert('Failed to submit your trip plan. Please try again.');
            });
    });

    document.getElementById('tripFormKorean').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_stb1w38', 'template_ue5kf3f', this)
            .then(function() {
                alert('여행 계획이 성공적으로 제출되었습니다!');
            }, function(error) {
                alert('여행 계획 제출에 실패했습니다. 다시 시도해 주세요.');
            });
    });
</script>

<!-- Contact Us Section (English) -->
<section id="contact" class="fade-in english">
    <h2>Contact Us</h2>
    <div class="contact-methods">
        <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" target="_blank" class="contact-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" class="contact-icon">
            <span>Contact us on WhatsApp</span>
        </a>
        <a href="https://open.kakao.com/o/YOUR_KAKAO_LINK" target="_blank" class="contact-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/1200px-KakaoTalk_logo.svg.png" class="contact-icon">
            <span>Contact us on KakaoTalk</span>
        </a>
    </div>
</section>

<!-- Contact Us Section (Korean) -->
<section id="contact-korean" class="fade-in korean">
    <h2>문의하기</h2>
    <div class="contact-methods">
        <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" target="_blank" class="contact-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" class="contact-icon">
            <span>WhatsApp으로 문의하기</span>
        </a>
        <a href="https://open.kakao.com/o/YOUR_KAKAO_LINK" target="_blank" class="contact-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/1200px-KakaoTalk_logo.svg.png" class="contact-icon">
            <span>카카오톡으로 문의하기</span>
        </a>
    </div>
</section>

    <footer>
        <p>&copy; 2024 Discover Egypt. All rights reserved.</p>
    </footer>

    <button id="back-to-top">Top</button>

    <div id="imageViewerContainer"></div>
    
    <!-- Image Viewer Container -->
    <div id="fullscreenViewer" class="fullscreen-viewer">
        <div class="viewer-content">
            <img src="" alt="Enlarged view">
            <button class="close-button">&times;</button>
        </div>
    </div>

    <script src="scripts.js"></script>

    <style>
        .contact-methods {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-top: 20px;
        }
        .contact-link {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #333;
            font-size: 18px;
            transition: color 0.3s ease;
        }
        .contact-link:hover {
            color: #007BFF;
        }
        .contact-icon {
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
    </style>
</body>
</html>
