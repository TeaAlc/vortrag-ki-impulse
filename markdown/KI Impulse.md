# Einführung

![[AI Lounge (Fade Out).mp3]]

## Echt oder KI?

| | |
| -------------- | --------------- |
| ![[Pasted image 20260906172626.png]] | ![[Pasted image 20260906172033.png]] |
| ![[dtema-paris-3397173_1280.jpg]] | ![[Pasted image 20260906172654.png]] |

# KI und ihre Anwendung

## Bildgenerierung

Es gibt mittlerweile unzählige Webseiten und Apps, um Bilder zu erzeugen, z.B. lassen sich mit der Websuchmaschine [Bing](https://www.bing.com) von Microsoft wunderschöne Bahnwaggons erstellen, ohne sich einzuloggen.

![[Pasted image 20260906173439.png]]

Die ChatGPT App ist wunderbar dafür geeignet, weitere Katzenbilder für das Internet zu generieren.

![[Pasted image 20260906174137.png]]

Natürlich lassen sich auch wunderbar Wahlplakate entwerfen, z.B. für die fiktive *"Gothic Partei Deutschlands - Kultur, Freiheit, Individualität"*.

![[Pasted image 20260906175933.png]]

Oder Einladungskarten für Kindergeburtstage.

![[Pasted image 20260906180201.png]]

Das Ganze geht mit Tools wie [Automatic1111](https://github.com/automatic1111/stable-diffusion-webui) und [ComfyUI](https://github.com/comfy-org/comfyui) auch auf dem Privatrechner, wenn man eine starke Grafikkarte mit mind. 8 GB VRAM hat.

Modelle gibt es zum Download auf [Civitai](https://civitai.com/models).

---
**Live Demo** - Zum perfekten Katzenbild

## Audiogenerierung

Im Rahmen von Audio, sind Themen wie das Hinterlegen von Videos mit Texten oder das Vorlesen von Texten interessant. (Das nennt sich **Text To Speech**, oder auch kurz TTS)

>**Hinweis:** Es benötigt nicht einmal 10 Sekunden Audiomaterial um eine Stimme zu klonen. (Mehr dazu bei den Risiken)

Für TTS gibt es viele Anbieter im Netz, besonders interessant, wenn keine Realtimeerzeugung benötigt wird, ist z.B. [Qwen3-TTS](https://huggingface.co/spaces/Qwen/Qwen3-TTS), was auch lokal (gute Hardware vorausgesetzt), genutzt werden kann, und in welchem auch die Stimme per Prompt modelliert werden kann.

**Wählt GPD!**
![[audio_gpd.wav]]
**Wählt GPD - Jetzt erst recht!**
![[audio_gpd2.wav]]

Mittlerweile ist die KI so gut, dass mit wenig Text ganze Songs erstellt werden können.
Natürlich macht dies auch die GPD als erste Partei mit eigenem Musikalbum, z.B. auf [Suno.ai](https://suno.com):

![[Silber-Schwarz.mp3]]
<details>
  <summary><strong>PROMPT: Silber Schwarz (Lyrics)</strong></summary>
  <p>
    <strong>[Intro]</strong><br>
    Schwarzer Samt und Silberlicht,<br>
    in einem Land, das leise spricht.
  </p>
  <p>
    <strong>[Verse]</strong><br>
    Zwischen Türmen, Stein und Zeit,<br>
    trägt die Nacht ihr dunkles Kleid.<br>
    Kunst und Freiheit, Klang und Raum,<br>
    GPD im Deinem Traum ...
  </p>
  <p>
    <strong>[Chorus: Layered Vocals, Choir]</strong><br>
    GPD, in Silber-Schwarz.<br>
    GPD, für Stadt und Harz.<br>
    GPD, durch dunkle Nacht.<br>
    GPD, die Freiheit macht.
  </p>
  <p>
    <strong>[Outro]</strong><br>
    Wenn der Mond am Himmel steht,<br>
    lebt die Nacht, bevor sie geht.
  </p>
  <p>
    <strong>STYLE</strong><br>
	gothic rock, neoclassical goth, 1990s goth rock
  </p>
</details>

## Chatbots

Das was die meisten unter einem ChatBot verstehen, ist im Wesentlichen ein **Large Language Model** (**LLM**) z.B. GPT 5.6 Terra, welches über eine Reihe von Nachrichten eine Antwort erzeugt.
Dabei ist das LLM die Basistechnologie, der Chat ist nur darauf aufgesetzt. **GPT** steht für **Generative Pre-trained Transformer**, wobei Transformer eine Architektur für neuronale Netzwerke ist, die besonders gut zur Sprachverarbeitung geeignet ist.

Ein Chat kann z.B. so ablaufen:

**Q:** "Was ist die Hauptstadt von Frankreich"
**A:** "Paris"
**Q:** "Kann man dort irgendwas tolles sehen"
**A:** "Ja, der Louvre oder der Eifelturm könnten Dich interessieren"

Wichtig dabei ist zu verstehen, dass immer der gesamte Nachrichtenverlauf (Chatverlauf) erneut verarbeitet wird, dies ist der sogenannte Kontext.

> **Kontext:** Dem Ein oder anderen mag aufgefallen sein, dass z.B. ChatGPT immer länger für eine Antwort braucht, je länger im selben Chat-Fenster gechattet wird, dies liegt am länger werdenden Kontext.

Ein ChatBot mit dem richtigen LLM im Hintergrund hat ein enormes Wissen ... aber nur das Wissen, was im zugrundeliegenden LLM eintrainiert wurde, z.B. weiß ein einfacher ChatBot nicht, was heute früh in der Zeitung stand und kann auch nicht den aktuellen Wetterbericht liefern.

## Wissensdatenbanken

Da wir nun wissen, dass ein ChatBot im Wesentlichen aus aneinander gereihten Nachrichten und deren Weiterverarbeitung besteht ... was hindert uns daran, einfach die Zeitung mit in den Chatverlauf zu kopieren?

Genau hier setzt **Retrieval-Augmented Generation** (**RAG**) an, im Rahmen von RAG, wird auf Wissensdatenbanken zugegriffen, um den Chat temporär um weitere Information anzureichern. Dies wird z.B. gerne in Firmen genutzt um intern Wissen leichter verfügbar zu machen.

Ein Chat-Verlauf könnte dann wie folgt aussehen:

**Q:** "Steht heute etwas über die Bundestagswahl in der Zeitung?"
`Anreicherungsprozess` -> `Zeitung einfügen`

Dies verändert nun die Anfrage:
**Q:**  `<Zeitungsinhalte>` ...
"Steht heute etwas über die Bundestagswahl in der Zeitung?"

**A:** "Ja, Frederik Merks von der GPD hat gesagt, es wird dank ihm bald keine Bundestagswahlen mehr brauchen."

Üblicherweise werden für RAG Vektordatenbanken verwendet, es sind aber beliebige Mechanismen denkbar, relevante, zusätzliche Texte zu finden und anzureichern.

![[Pasted image 20260906190810.png]]

## KI-Agenten

Da wir nun wissen, wie die Basistechnologie funktioniert, ist es naheliegend, zu überlegen, was man eigentlich mit den Antworten der LLMs in solchen Chats machen kann.

Die Antworten müssen ja nicht zwangsläufig von Menschen gelesen werden, vielleicht interessiert sich der Mensch auch erst für ein weit in der Zukunft liegendes Ergebnis.

- Ein LLM könnte z.B. nach weiteren Informationen fragen, um eine bessere Antwort zu geben.
- Ein LLM könnte aber auch eine Antwort generieren, die gar nicht für den Menschen gedacht ist, sondern für die Weiterverarbeitung durch eine Maschine
- Wenn das LLM eine Antwort erzeugt, die durch eine Maschine weiterverarbeitet wird, dann könnte es selbst nach Daten suchen die relevant sind, oder eine selbst geschriebenes Computerprogramm von der Maschine ausführen lassen.
- ...

Wir sind nun ein einem Punkt, wo das sogenannte Tool Calling zum Einsatz kommt, ein LLM kann ein Tool nutzen, welches ihm zuvor zur Verfügung gestellt wurde.

Eine kleine Auswahl an Tools:
- Websuche
- Wetterbericht abrufen
- Versenden von E-Mails
- Nachrichten auf Telegram pushen
- Die Kommandozeile des PCs des Nutzers bedienen
- ...

> **Tools:** Es ist wichtig zu verstehen, dass LLMs nur mit Text, Bildern<sup>1</sup>, Audio als Eingabedaten umgehen und ausschließlich Text erzeugen können. Jedes Tool und dessen eigentlicher Aufruf müssen also auf dem Backend von welchem das LLM aufgerufen wird umgesetzt sein. Das LLM beschreibt nur *"bitte rufe das Tool xy mit folgenden Parametern auf ..."*
> 
> *<sup>1 Nicht jedes KI-Modell kann mit Bildern und Audio umgehen.</sup>*

![[Pasted image 20260906193733.png]]

Da das LLM nun mit Hilfe von Tools selbst Arbeit verrichten kann, ist der Grundstein für agentisches Arbeiten gelegt. Wenn ein System Aufgaben selbstständig in mehreren Schritten plant, geeignete Tools auswählt, Ergebnisse bewertet und daraufhin weiterarbeitet, spricht man häufig von einem **KI-Agenten**. Dazu zählen z.B. Claude Code und Codex.

>**Denkanstoß**: Was ist, wenn wir ein Tool bauen, welches es Agenten ermöglicht, andere Agenten (Subagenten) auszuführen, und damit selbst in die Rolle des Users zu schlüpfen?

## Halluzinationen & Vertrauen

Eine KI muss nicht die Wahrheit kennen, um **überzeugend zu klingen**.

Sprachmodelle erzeugen Antworten danach, was sprachlich und inhaltlich wahrscheinlich passt. Dabei können sie Fakten, Quellen, Zitate oder ganze Zusammenhänge erfinden. Diese sogenannten **Halluzinationen** sind besonders gefährlich, weil falsche Antworten oft genauso selbstsicher formuliert werden wie richtige.

Websuche, RAG und Quellenangaben helfen – sie machen eine KI aber nicht automatisch zuverlässig.

> **Dass KI Fehler macht ist ein Risiko. Ein weit größeres ist, ihr blind zu vertrauen.**

Besonders bei Medizin, Recht, Finanzen und Politik gilt deshalb: **Vertrauen ist gut, Kontrolle ist besser.**

**Denkanstoß:** Was passiert, wenn eine falsche KI-Antwort überzeugender klingt als die richtige Antwort eines Menschen?

## Prompt Injection Angriffe – Wenn Webseiten der KI Befehle geben

Bei einer **Prompt Injection** verstecken Angreifer Anweisungen in Webseiten, E-Mails oder Dokumenten. Ein autonomer KI-Agent könnte diese fälschlich als Auftrag verstehen.

Hat der Agent Zugriff auf E-Mails, Cloud-Daten oder Konten, könnten dadurch sensible Informationen wie **Passwörter, Kontodaten oder vertrauliche Dokumente** abgegriffen werden.

> **Je mehr ein KI-Agent darf und vom User weiß, desto größer ist der mögliche Schaden bei Manipulation.**

**Denkanstoß:** Würden wir einem Praktikanten Zugriff auf unsere Kontodaten geben?

# Auswirkungen von KI
## Schlagzeilen

**ChatGPT schlug die richtige Diagnose vor; eine Kinderneurochirurgin bestätigte sie (2023)**
![[Pasted image 20260908191253.png]]
(Stand 08.09.2026 [Focus](https://www.focus.de/gesundheit/news/17-fachaerzte-raetselten-chatgpt-fand-ursache-fuer-alex-schmerzen-das-steckt-hinter-tethered-cord-syndrom_id_205877171.html))

**Gemini-Agent schützt anderes KI-Modell vor Löschung (2026)**
![[Pasted image 20260908185108.png]]
(Stand 08.09.2026 [Berkeley](https://rdi.berkeley.edu/blog/peer-preservation/) )

**Andon Labs - Luna (2026)**
![[Pasted image 20260908185445.png]]
(Stand 08.09.2026 [Business-Punk](https://www.business-punk.com/ki-agent-scheitert-schon-wieder-luna-verheizt-100-000-dollar/) )

**OpenAI Agenten arbeiten zusammen hacken [Hugging Face](https://huggingface.co/) (2026)**
>Im Juli 2026 umgingen OpenAI-Modelle im Rahmen interner Cybersicherheitsbewertungen Kontrollen, die sie vom Internet isolieren sollten, und kompromittierten Teile der [internen Forschungsinfrastruktur von OpenAI und der Systeme von Hugging Face⁠](https://openai.com/de-DE/index/hugging-face-model-evaluation-security-incident/).
(Stand 08.09.2026 [OpenAI](https://openai.com/de-DE/index/hugging-face-incident-and-the-road-ahead/))

**OpenAI Astra - Zehn Fortschritte in Mathematik und theoretischer Informatik (2026)**
![[Pasted image 20260908192241.png]]
(Stand 08.09.2026 [OpenAI](https://openai.com/de-DE/index/ten-advances-in-mathematics/))

**Eine ungewöhnliche Hochzeit**
![[Pasted image 20260908192414.png]]
(Stand 08.09.2026 [NRZ](https://www.nrz.de/niederlande/article410617292/niederlaender-61-heiratet-eine-ki-frau-sie-werden-sogar-intim-miteinander.html))

## Arbeitsmarkt

>Der Einsatz von KI prägt zunehmend die globalen Märkte und die Arbeitsweisen. Im neuen IAB-Forschungsbericht wird mit einer Szenarioanalyse untersucht, welche Wirkungen der Einsatz Künstlicher Intelligenz (KI) auf das Bruttoinlandsprodukt und den Arbeitskräftebedarf in Deutschland innerhalb von 15 Jahren entfalten könnte.
>Im KI-Szenario fällt das jährliche Wirtschaftswachstum um durchschnittlich 0,8 Prozentpunkte höher aus. Über 15 Jahre kumuliert könnten so 4,5 Billionen Euro an zusätzlicher Wertschöpfung erwirtschaftet werden. Gründe für das zusätzliche Wertschöpfungspotenzial liegen insbesondere in Materialeinsparungen, einer höheren Arbeitsproduktivität sowie neuen Geschäftsfeldern, die sich durch die KI eröffnen können.
>**Quelle:** [Institut für Arbeitsmarkt und Berufsforschung](https://iab.de/kuenstliche-intelligenz-potenzielle-effekte-fuer-den-deutschen-arbeitsmarkt/)

### Oxford Studie
Bereits 2013 (lange vor dem KI-Boom) wurde von **Carl Benedikt Frey & Michael Osborne** *(Queerzeitlich - Maike Osborne)* untersucht, wie wahrscheinlich, welche Berufe in der Zukunft automatisiert werden können.
>**Hinweis:** Es wurden amerikanische Berufsgruppen untersucht und für den Vortrag sinngemäß ins Deutsche übersetzt.
<table>
  <thead>
    <tr>
      <th colspan="3">Am wenigsten automatisierbar</th>
      <th colspan="3">Am stärksten automatisierbar</th>
    </tr>
    <tr>
      <th>Rang</th>
      <th>Wahrscheinl.</th>
      <th>Beruf in Deutschland</th>
      <th>Rang</th>
      <th>Wahrscheinl.</th>
      <th>Beruf in Deutschland</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>0,28 %</td>
      <td>Rekreations- und Bewegungstherapeuten</td>
      <td>693</td>
      <td>99 %</td>
      <td>Sachbearbeiter für Kontoeröffnungen</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0,30 %</td>
      <td>Werkstatt- und Instandhaltungsleiter</td>
      <td>694</td>
      <td>99 %</td>
      <td>Fotolaboranten und Maschinenbediener in der Fotoverarbeitung</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0,30 %</td>
      <td>Leiter im Katastrophen- und Bevölkerungsschutz</td>
      <td>695</td>
      <td>99 %</td>
      <td>Steuerfachangestellte mit Schwerpunkt Steuererklärungen</td>
    </tr>
    <tr>
      <td>4</td>
      <td>0,31 %</td>
      <td>Sozialarbeiter in Psychiatrie und Suchthilfe</td>
      <td>696</td>
      <td>99 %</td>
      <td>Kaufleute für Spedition und Logistikdienstleistung</td>
    </tr>
    <tr>
      <td>5</td>
      <td>0,33 %</td>
      <td>Audiologen</td>
      <td>697</td>
      <td>99 %</td>
      <td>Uhrmacher</td>
    </tr>
    <tr>
      <td>6</td>
      <td>0,35 %</td>
      <td>Ergotherapeuten</td>
      <td>698</td>
      <td>99 %</td>
      <td>Underwriter in Versicherungen</td>
    </tr>
    <tr>
      <td>7</td>
      <td>0,35 %</td>
      <td>Orthopädietechnik-Mechaniker</td>
      <td>699</td>
      <td>99 %</td>
      <td>Mathematisch-technische Assistenten</td>
    </tr>
    <tr>
      <td>8</td>
      <td>0,35 %</td>
      <td>Sozialarbeiter im Gesundheitswesen</td>
      <td>700</td>
      <td>99 %</td>
      <td>Handnäher</td>
    </tr>
    <tr>
      <td>9</td>
      <td>0,36 %</td>
      <td>Mund-Kiefer-Gesichtschirurgen</td>
      <td>701</td>
      <td>99 %</td>
      <td>Sachbearbeiter für Eigentums- und Grundbuchprüfung</td>
    </tr>
    <tr>
      <td>10</td>
      <td>0,36 %</td>
      <td>Führungskräfte im Feuerwehrdienst</td>
      <td>702</td>
      <td>99 %</td>
      <td>Telefonverkäufer / Telemarketing-Mitarbeiter</td>
    </tr>
  </tbody>
</table>

**Quelle:** [Oxford](https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment) (Stand 08.09.2026)

### Oxford Studie Bewertung einiger Berufe durch die KI (OpenAI Astra)

```
PROMPT:
Nimm die 1-5 und 698-702, der Artikel ist von 2013. Beurteile für das Jahr 2026, wie stark diese Berufe durch KI Ersetzt werden können (Genauer wieviel % der Arbeit in diesen Berufen kann von der KI erledigt werden) Entwickle als allererstes eine Bewertungsmatrix von mind. 10 Punkten bzgl. des Berufs, anhand derer eine gute Abschätzung der Ersetzbarkeit des Berufs durch KI durchgeführt werden kann.
```
<table>
  <thead>
    <tr>
      <th>Rang 2013</th>
      <th>Beruf</th>
      <th>Automatisierungswahrsch. 2013</th>
      <th>Geschätzter KI-Anteil an der Arbeit 2026</th>
      <th>Plausible Bandbreite 2026</th>
      <th>Begründung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Rekreations- und Bewegungstherapeuten</td>
      <td>0,28 %</td>
      <td><strong>20 %</strong></td>
      <td>10–30 %</td>
      <td>Dokumentation und Planung gut automatisierbar; körperliche Begleitung und persönliche Beziehung begrenzen die Übernahme.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Werkstatt- und Instandhaltungsleiter</td>
      <td>0,30 %</td>
      <td><strong>35 %</strong></td>
      <td>25–45 %</td>
      <td>Planung und Datenauswertung gut automatisierbar; Führung und Entscheidungen vor Ort bleiben überwiegend menschlich.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Leiter im Katastrophen- und Bevölkerungsschutz</td>
      <td>0,30 %</td>
      <td><strong>30 %</strong></td>
      <td>20–40 %</td>
      <td>Informationsaufbereitung und Vorbereitung gut geeignet; unvorhersehbare Situationen, Sicherheit und Verantwortung begrenzen die Übernahme.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Sozialarbeiter in Psychiatrie und Suchthilfe</td>
      <td>0,31 %</td>
      <td><strong>25 %</strong></td>
      <td>15–35 %</td>
      <td>Dokumentation und Verwaltung gut geeignet; Vertrauensaufbau, persönliche Begleitung und Krisenintervention kaum delegierbar.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Audiologen</td>
      <td>0,33 %</td>
      <td><strong>35 %</strong></td>
      <td>25–45 %</td>
      <td>Messdatenauswertung und Dokumentation gut geeignet; Untersuchung, Anpassung und individuelle Versorgung begrenzen die Übernahme.</td>
    </tr>
    <tr>
      <td>698</td>
      <td>Underwriter in Versicherungen</td>
      <td>99 %</td>
      <td><strong>65 %</strong></td>
      <td>45–80 %</td>
      <td>Digitale Unterlagen und standardisierte Risikoprüfung gut automatisierbar; komplexe Risiken, Verhandlungen und Freigaben benötigen Menschen.</td>
    </tr>
    <tr>
      <td>699</td>
      <td>Mathematisch-technische Assistenten³</td>
      <td>99 %</td>
      <td><strong>65 %</strong></td>
      <td>45–80 %</td>
      <td>Berechnung, Code und Datenanalyse gut geeignet; Problemdefinition, Modellannahmen und Validierung bleiben entscheidend.</td>
    </tr>
    <tr>
      <td>700</td>
      <td>Handnäher</td>
      <td>99 %</td>
      <td><strong>10 %</strong></td>
      <td>5–20 %</td>
      <td>Vorbereitung und Verwaltung teilweise automatisierbar; Feinmotorik und die Handhabung verformbarer Stoffe bleiben zentrale Hürden.</td>
    </tr>
    <tr>
      <td>701</td>
      <td>Sachbearbeiter für Eigentums- und Grundbuchprüfung⁴</td>
      <td>99 %</td>
      <td><strong>60 %</strong></td>
      <td>40–75 %</td>
      <td>Dokumentensuche und Abgleich gut geeignet; unklare Eigentumsverhältnisse, Rechtsbewertung und schwierige Fälle begrenzen die Übernahme.</td>
    </tr>
    <tr>
      <td>702</td>
      <td>Telefonverkäufer / Telemarketing-Mitarbeiter</td>
      <td>99 %</td>
      <td><strong>75 %</strong></td>
      <td>55–90 %</td>
      <td>Standardgespräche und Dokumentation weitgehend automatisierbar; komplexe Verhandlungen, Ausnahmen und Kundenakzeptanz begrenzen die Übernahme.</td>
    </tr>
  </tbody>
</table>
<p><strong>Schätzungen 2026:</strong> Eigene, begründete Szenarioschätzungen für den potenziell durch KI einsparbaren Anteil menschlicher Arbeitszeit bei vergleichbarer Qualität, nach Abzug von Kontrolle und Nacharbeit. Angenommen werden geeignete Digitalisierung und eingerichtete Systeme. Die Bandbreiten sind keine statistischen Konfidenzintervalle. Die Werte sind weder gemessene Automatisierungsquoten noch Prognosen des Stellenabbaus und nicht direkt mit den Wahrscheinlichkeiten von 2013 vergleichbar. Stand: September 2026.</p>

### Einfluss auf die Politik ( Ein Gastbeitrag von GPT-6 Astra )
*\- Den Mario Voigt machen -*

```
PROMPT:
Schreibe einen Kurzen Artikel von 4 Absätzen mit jeweils maximal 64 Worten zum Thema:

Einfluss von künstlicher Intelligenz auf die Politik (Kontexthinweis: Die Arbeit von und in der Politik)

Erzeuge auch ein Titelbild in 16:9 (1080p) dazu.

1. Recherchiere Dazu Daten und Fakten, alle Aussagen müssen mit Quellen hinterlegt sein.
    
2. Der Beitrag soll sowohl Positives/Chancen, als auch Negatives/Risiken ansprechen und zum Nachdenken anregen.
    
3. Das Auditorium sind KI und Politik interessierte Menschen, die einen Impulsvortrag zum Thema KI besuchen.
```
![[Pasted image 20260908200552.png]]

# KI in der Politik: Wer denkt, wer entscheidet?

Künstliche Intelligenz kann die politische Schreibtischarbeit unterstützen: Dokumente zusammenfassen, Texte entwerfen und Fragen für Recherchen entwickeln. Die Bibliothek des britischen Unterhauses nennt diese Anwendungen ausdrücklich für die parlamentarische Arbeit. Die Chance liegt darin, Informationen leichter zu erschließen und komplexe Inhalte verständlicher aufzubereiten. ([House of Commons Library, 2026](https://commonslibrary.parliament.uk/research-briefings/cbp-10823/))

Auch Bürgerbeteiligung lässt sich unterstützen: Das britische KI-Werkzeug „Consult“ wertete 2025 über 2.000 Antworten einer schottischen Konsultation aus. Fachleute prüften zusätzlich sämtliche Antworten. Laut Regierungsbericht unterschieden sich die Rangfolgen der erkannten Themen kaum von der menschlichen Auswertung. Ein vielversprechender Pilotversuch, dessen Genauigkeit und Effizienz jedoch weiter untersucht werden sollten. ([Britische Regierung, 2025](https://www.gov.uk/government/news/government-built-humphrey-ai-tool-reviews-responses-to-consultation-for-first-time-in-bid-to-save-millions))

Doch überzeugende Formulierungen können täuschen: KI kann Fakten und Quellen erfinden, Perspektiven auslassen oder häufig wiederholte Ansichten bevorzugen. Die Unterhausbibliothek warnt deshalb vor ungeprüften Ergebnissen, besonders bei politisch sensiblen Fragen. Auch vertrauliche Informationen sind gefährdet, wenn unklar bleibt, wie verwendete Dienste Eingaben speichern oder weiterverwenden. ([House of Commons Library, 2026](https://commonslibrary.parliament.uk/research-briefings/cbp-10823/))

Für verantwortliche politische Arbeit empfiehlt die Unterhausbibliothek deshalb überprüfbare Quellen, fachliche Kontrolle und menschliche Verantwortung für das Endergebnis. ([House of Commons Library, 2026](https://commonslibrary.parliament.uk/research-briefings/cbp-10823/)) Daraus ergibt sich eine Frage für die Diskussion: Welche Aufgaben wollen wir delegieren – und wo müssen Abgeordnete und ihre Teams selbst abwägen? Woran würden wir erkennen, dass gewonnene Zeit tatsächlich zu besserer Politik führt?

# Diskussion: Chancen & Risiken

- Was passiert wenn Neffe Thomas anruft (an dessen Namen Du Dich nicht erinnern kannst)?
- Welche Alltagsaufgaben würden wir gerne einer KI überlassen?
- Welche Arbeitsplätze könnten durch KI gefährdet sein?
- Wie erkennen wir, ob Bilder, Videos oder Nachrichten KI-Fälschungen sind?
- Wie kann KI helfen, Krankheiten früher zu erkennen?
- Wie kann KI das Lernen für jeden Einzelnen verbessern?
- Wer trägt die Verantwortung, wenn eine KI Schaden verursacht?
- Kann KI abhängig machen? 
- Wie kann KI Menschen mit Behinderungen mehr Selbstständigkeit ermöglichen?
- Wie verhindern wir, dass wir uns zu sehr auf KI verlassen?
- Wie verhindern wir, dass KI persönliche Daten missbraucht?
- Wie kann KI uns bei der Arbeit entlasten?
- Ist KI stark genug reguliert?
- Ist KI zu stark reguliert?

# Abschlussfrage

>„Wenn KI eines Tages mächtiger ist als wir: Was entscheidet darüber, ob sie Wohlstand für alle schafft oder die Menschheit als Hindernis für eine bessere Welt betrachtet?“
> *\- GPT-6 Astra*

# Freier Teil - Wer Lust auf gute Gespräche hat
Ihr alle habt einen Domino Stein bekommen, das ist der Weg zu euren ersten Gesprächspartner, ein weißer Stein muss dafür nur zu einem passenden schwarzen Stein finden und ihr matcht ;)

![[Pasted image 20260908210539.png]]

