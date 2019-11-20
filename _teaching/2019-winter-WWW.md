---
title: "Projektowanie serwisów WWW"
collection: teaching
type: "Wykłady i laboratoria"
permalink: /teaching/2019-serwisy-WWW
venue: "AMW, WEM"
date: 2019-10-10
location: "Gdynia, Polska"
---

Zagadnienia i sposób zaliczenia:



Tematy zadań
======

1. Praca z systemem kontroli wersji. Podstawy WWW.
  * cel - stworzyć prostą stronę WWW, nie wymagającą użycia serwera webowego;
  * należy użyć HTML, CSS i JS do ww. zadania;
  * książka online o systemie Git: <a href="https://git-scm.com/book/pl/v2" target="_blank">tutaj</a>; 
  * pomoc dla osób, które zaczynają przygodę z systemem kontroli wersji Git: <a href="https://www.flynerd.pl/2018/02/github-dla-zielonych-pierwsze-repozytorium.html" target="_blank">tutaj</a>;
  * należy utworzyć konto na hostingu GitHub lub innym (np. Bitbucket), aby "przechowywać" tam zrealizowane laboratoria.
  * pomoc do dalszej części zadań związanych z WWW: <a href="http://niezbednik-nauczyciela.pl/publikacje/r2019/html97/k_0_0_0.php" target="_blank">tutaj</a>;
  * dla początkujących w dziedzinie WWW wskazane jest przejrzenie materiałów z ww. linka, żadnych ćwiczeń z tamtej strony nie wykonujemy;
  * należy stworzyć prosty szablon strony HTML i zapisać go pod nazwą index.html;
  * zastosować na stronie znaczniki odpowiadające za układ strony - section, article, aside, header, footer, nav, np. <a href="http://how2html.pl/div-sekcje-html5/" target="_blank">stąd</a>;
  * stworzyć plik drugi.html, który będzie wykorzystywany do adresowania względnego. Plik powinien zawierać podstawowy układ strony HTML (podobnie jak dla pliku index.html);
  * stworzyć link (adres względny - p. 3d) na stronie index.html do strony drugi.html i tam należy umieszczać kolejne części zadania.
  * użyć elementów blokowych (p. 3a), elementów wstawionych (p. 3b) i elementów osadzonych (p. 3c) 
  * stworzyć przykładową tabelę (p. 3e) o dowolnej tematyce. 
  * CSS - użyć jednostki miar względne i bezwzględne (p. 4a).
  * przejrzeć p. 4b i zastosować wybrane przez siebie właściwości CSS.
  * zastosować pseudoklasy do linków (p.4a).
  * zastosować formy i układy selektorów (p.4a).
  * zapoznać się z podstawami Java Script, np.:
        * Kurs JS <a href="https://jakubjurkian.pl/kurs-javascript-brackets-debugowanie-zmienne-operatory/" target="_blank"> part 1</a>,
        * Kurs JS <a href="https://jakubjurkian.pl/kurs-javascript-tablice-obiekty-komentarze/" target="_blank"> part 2</a>,
        * Kurs JS <a href="https://jakubjurkian.pl/kurs-javascript-drzewo-dom-wybieranie-elementow/" target="_blank"> part 3</a>,
        * Wstęp do JS na <a href="https://www.w3schools.com/js/js_intro.asp" target="_blank"> W3 Schools</a>.
  * zapoznać się z przykładowym modelem DOM (p. 2c)</a>
  * Stworzyć nowe elementy (np. za pomocą metod createElement i appendChild) oraz dodać do nich style (metoda 'style') i klasy (metoda 'add').


2. Wybrany framework front-endowy + JavaScript
  * zadanie polega na wykorzystaniu "czystego" Java Script do wyświeltlania, modyfikowania, tworzenia (itp. itd.) elementów strony związanych z HTML i CSS,
  * należy użyć wybrany (dowolny) framework front-endowy do tego zadania,
  * najpopularniejszy jest Bootstrap - <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/" target="_blank">tutaj</a> (jest tutaj dobry, prosty startowy szablon),
  * UI Kit też jest ciekawy - <a href="https://getuikit.com/docs/installation" target="_blank">tutaj</a>,
  * przydatne strony o JS:
        * Kurs Java Script po polsku <a href="https://kursjs.pl/" target="_blank"> tutaj</a>,
        * Kurs JS w formie wideo <a href="https://miroslawzelent.pl/kurs-javascript/" target="_blank"> tutaj</a>,
        * JS + HTML DOM na <a href="https://www.w3schools.com/jsref/default.asp" target="_blank"> W3 Schools</a>.
  * na przykład korzystając z ww. szablonu Bootstrap, można dodać przycisk z klasą ```badge-light``` do strony (np. pod nagłówkiem 'Hello world'):
	```
	<button type="button" class="btn btn-primary">
			Notifications <span class="badge badge-light"></span>
		</button>
	```
	Poniżej, np. przed końcem sekcji ```body``` wrzucamy skrypt, który szuka elementu z klasą ```badge-light``` i ustawia jego wartość (innerHTML) na liczbę 6:
	```
	<script>
		  var x = document.getElementsByClassName("badge-light");
		  x[0].innerHTML = 6; // x[0] to pierwszy znaleziony element
	    </script>
	```
  * w podobny sposób należy wykorzystać inne elementy Java Script do modyfikacji elementów strony,
  * wskazane użycie około 20 różnych elementów Java Script do ww. modyfikacji.

3. Projektowanie aplikacji bazodanowej. Architektura klient-serwer. Model MVC (lub MTV w innych frameworkach)
  * zaprojektować bazę danych do aplikacji typu 'blog',
  * język (framework) programowania dowolny,
  * dobra okazja do "wdrożenia się" w ulubioną technologię,
  * utworzyć ww. bazę danych, np. poprzez ORM (mapowanie obiektowo - relacyjne) lub "ręcznie",
  * wykonać proste zapytania do bazy danych w konsoli lub w panelu zarządzania (zapisać dwa wybrane zrzuty ekranu),
  * dodać do aplikacji funkcje CRUD (ang. create, read, update, delete), tak aby były dostępne na stronie (przyciski, formularze itp.),
  * uruchomić i przetestować serwer deweloperski, "sprawdzić" kody statusowe HTTP,
  * przykład tworzenia projektu ww. typu w języku Python dostępny jest <a href="https://tutorial.djangogirls.org/pl/" target="_blank"> tutaj</a>, będę go omawiał szczegółowo na zajęciach.

4. SQL.
  * zrealizować proste i średnio zaawansowane zapytania SQL,
  * zapytania powinny dotyczyć rekordów z bazy danych, utworzonych w ramach lab. nr 3,
  * rodzaje zapytań realizujemy z <a href="https://www.w3schools.com/sql/default.asp" target="_blank">tej strony</a> (od SQL SELECT do SQL INSERT INTO SELECT z menu po lewej),
  * należy tak zaprojektować (dopasować) strukturę bazy danych, aby można było wykonać jak najwięcej ww. zapytań.

5. Wdrażanie wybranego frameworka front-endowego.
  * należy wybrać dowolny framework (inny niż ten użyty w lab. nr 2) i użyć go na swojej stronie;
  * do wyboru do koloru, np. <a href="https://raygun.com/blog/popular-javascript-frameworks/" target="_blank">stąd</a>,
  * to dobry czas na sprawdzenie technologii, na którą nigdy nie było czasu, ale zawsze kusiła ...,
  * back-end można zostawić z poprzednich zadań albo zrobić coś nowego.

6. Autentykacja i autoryzacja.
  * przeanalizować sesje i ciasteczka,
  * wdrożyć prosty system logowania do swojego serwisu.

7. "Upiększanie" serwisu.
  * Wykonać > 10 modyfikacji serwisu, np. wg <a href="https://www.w3schools.com/howto/default.asp"> tych wskazówek</a>.

8. Praca z usługą typu PaaS (ang. Platform as a Service)
  * Stworzyć konto np. na heroku.com	
  * Zainstalować CLI dla Heroku (lub innej platformy);
  * Przesłać swój projekt na Heroku zgodnie z dokumentacją.

Zasady zaliczenia przedmiotu
======

1. Dowolny język do realizacji zadania.
2. Zadanie należy zrealizować do następnych zajęć - max. 5 punktów,
  * Tydzień opóźnienia w realizacji zadania - max. 3 punkty,
  * Przekroczenie obu terminów - max. 1 punkt.
3. Zrealizowane zadanie należy umieścić na portalu GitHub (lub BitBucket) i wysłać link do prowadzącego (Slack).
4. Zadanie należy zaprezentować osobiście prowadzącemu. 

Punkty i oceny przedstawione są w arkuszu Google Docs.

