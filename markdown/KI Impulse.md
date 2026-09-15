# KI Impulse

Anwendungen, Funktionsweisen, Chancen und Risiken künstlicher Intelligenz.

![[assets/images/roboter-avatar.webp]]

**AI Lounge**

![[assets/audio/ai-lounge.webm]]

**AI Lounge 2**

![[assets/audio/AI Lounge 2.webm]]

**AI Lounge 3**

![[assets/audio/AI Lounge 3.webm]]

---

## Echt oder KI?

| A | B |
| --- | --- |
| ![[assets/images/paris-eiffelturm-ki-1.webp]] | ![[assets/images/paris-eiffelturm-ki-2.webp]] |
| **C** | **D** |
| ![[assets/images/paris-eiffelturm-original.webp]] | ![[assets/images/paris-eiffelturm-ki-3.webp]] |

---

## Bildgenerierung

Es gibt mittlerweile unzählige Webseiten und Apps, um Bilder zu erzeugen. Mit der Websuchmaschine [Bing von Microsoft](https://www.bing.com) lassen sich zum Beispiel wunderschöne Bahnwaggons erstellen, ohne sich einzuloggen.

![[assets/images/graffiti-waggon.webp]]

---

## Mehr Katzenbilder fürs Internet

![[assets/images/kind-und-katze.webp]]

Die ChatGPT-App ist wunderbar dafür geeignet, weitere Katzenbilder für das Internet zu generieren.

---

## Ein fiktives Wahlplakat

Natürlich lassen sich auch Wahlplakate entwerfen – hier für die fiktive „Gothic Partei Deutschlands – Kultur, Freiheit, Individualität“.

![[assets/images/gpd-wahlplakat.webp]]

---

## Oder Einladungskarten

![[assets/images/kindergeburtstag-einladung.webp]]

Auch Einladungskarten für Kindergeburtstage lassen sich erzeugen.

---

## Bildgenerierung auf dem eigenen Rechner

Das geht mit Werkzeugen wie [AUTOMATIC1111](https://github.com/automatic1111/stable-diffusion-webui) und [ComfyUI](https://github.com/comfy-org/comfyui) auch lokal – mit einer starken Grafikkarte und mindestens 8 GB VRAM.

Modelle gibt es etwa bei [Civitai](https://civitai.com/models).

![[assets/images/roboter-maler.webp]]

---

## Live-Demo

**Zum perfekten Katzenbild**

### Prompt

Beschreibe, was ein Katzenbaby süß macht, und warum Menschen darauf reagieren, beschreibe die psychologischen Effekte und die Wirkung von Farben und Mustern in diesem Kontext. Beschreibe auch den Felltypen, den Menschen am knuddligsten finden.

*"Da steht ja garnichts von einem Bild?"* - Frederik Merks (GPD)

---

## Text wird zur Stimme

Beim Audio sind das Hinterlegen von Videos mit gesprochenem Text und das Vorlesen von Texten besonders interessant. Das nennt sich **Text to Speech**, kurz TTS.

> Weniger als zehn Sekunden Audiomaterial können genügen, um eine Stimme zu klonen. Mehr dazu bei den Risiken.

Für TTS gibt es viele Anbieter. Wenn keine Erzeugung in Echtzeit nötig ist, ist zum Beispiel [Qwen3-TTS](https://huggingface.co/spaces/Qwen/Qwen3-TTS) interessant.

Es kann – gute Hardware vorausgesetzt – lokal betrieben werden; auch die Stimme lässt sich per Prompt modellieren.

---

## GPD-Sprachbeispiele

**„Wählt GPD!“**

![[assets/audio/waehlt-gpd.wav]]

**„Wählt GPD – jetzt erst recht!“**

![[assets/audio/waehlt-gpd-jetzt.wav]]

---

## Musikgenerierung

Mit wenig Text kann KI mittlerweile ganze Songs erstellen. Natürlich macht dies auch die fiktive GPD als erste Partei mit eigenem Musikalbum – zum Beispiel mit [Suno.ai](https://suno.com).

![[assets/audio/silber-schwarz.webm]]

> [!example]- Prompt: Silber-Schwarz
> **[Intro]**\
> Schwarzer Samt und Silberlicht,\
> in einem Land, das leise spricht.
>
> **[Verse]**\
> Zwischen Türmen, Stein und Zeit,\
> trägt die Nacht ihr dunkles Kleid.\
> Kunst und Freiheit, Klang und Raum,\
> GPD in Deinem Traum …
>
> **[Chorus: Layered Vocals, Choir]**\
> GPD, in Silber-Schwarz.\
> GPD, für Stadt und Harz.\
> GPD, durch dunkle Nacht.\
> GPD, die Freiheit macht.
>
> **[Outro]**\
> Wenn der Mond am Himmel steht,\
> lebt die Nacht, bevor sie geht.
>
> **Style**\
> gothic rock, neoclassical goth, 1990s goth rock

---

## Large Language Model

Was die meisten unter einem Chatbot verstehen, ist im Wesentlichen ein **Large Language Model** (LLM), zum Beispiel GPT 5.6 Terra, das über eine Reihe von Nachrichten eine Antwort erzeugt. Der Chat ist die Oberfläche; das LLM ist die Basistechnologie darunter.

**GPT**: Generative Pre-trained Transformer

Transformer sind eine Architektur für neuronale Netzwerke, die besonders gut zur Sprachverarbeitung geeignet ist.

---

## Ein Chat kann so ablaufen

**Q:** „Was ist die Hauptstadt von Frankreich?“

**A:** „Paris.“

**Q:** „Kann man **dort**\* irgendetwas Tolles sehen?“

**A:** „Ja, der Louvre oder der Eiffelturm könnten Dich interessieren.“

\*„Dort“ bezieht sich hier auf Paris aus der vorherigen Antwort.

---

## Der gesamte Verlauf wird zum Kontext

Nachricht 1 → Nachricht 2 → … → Neue Frage → **LLM** → Antwort

> Je länger im selben Chatfenster geschrieben wird, desto länger wird der Kontext – und desto aufwendiger kann die Antwort werden.

---

## Was das Modell nicht weiß

Ein Chatbot mit dem richtigen LLM hat enormes Wissen – aber nur das Wissen, das im zugrunde liegenden Modell eintrainiert wurde. Ein einfacher Chatbot kennt weder die Zeitung von heute früh noch automatisch den aktuellen Wetterbericht.

Was hindert uns daran, die Zeitung mit in den Chatverlauf zu kopieren? Genau hier setzt RAG an: Relevante Inhalte werden vorübergehend als Kontext ergänzt.

### RAG: Retrieval-Augmented Generation

**Retrieval-Augmented Generation** heißt auf Deutsch: *durch Informationsabruf ergänzte Antwortgenerierung*. Kurz: **RAG**.

RAG greift auf Wissensdatenbanken zu und reichert den Chat temporär mit relevanten Informationen an. In Firmen wird das häufig genutzt, um internes Wissen leichter verfügbar zu machen.

---

## So funktioniert RAG im Chatbot

![[assets/images/rag-diagramm.webp]]

**Q:** „Steht heute etwas über die Bundestagswahl in der Zeitung?“

**Kontext ergänzen:** Zeitung als Kontext einfügen

**Q:** `<Zeitungsinhalte>`\
„Steht heute etwas über die Bundestagswahl in der Zeitung?“

**A:** „Ja, Frederik Merks von der GPD hat gesagt, es wird dank ihm bald keine Bundestagswahlen mehr brauchen.“

Üblicherweise werden Vektordatenbanken verwendet. Denkbar ist jeder Mechanismus, der relevante Zusatztexte findet.

---

## Antworten für Maschinen

LLM-Antworten müssen nicht zwangsläufig von Menschen gelesen werden. Ein LLM kann eine Antwort erzeugen, die für die Weiterverarbeitung durch eine Maschine bestimmt ist.

So kann ein Modell nach weiteren Informationen fragen, relevante Daten suchen oder ein Computerprogramm ausführen lassen. Damit ergibt sich die Frage: Was geschieht mit dem Text, den das Modell erzeugt?

### Vom Antworten zum Handeln

Tool Calling setzt genau hier an: Das Modell beschreibt, welches Werkzeug mit welchen Parametern aufgerufen werden soll. Die Ausführung übernimmt das Backend.

---

## Das Modell beschreibt – das Backend handelt

![[assets/images/tool-calling-diagramm.webp]]

### Eine kleine Auswahl an Tools

- Websuche
- Wetterbericht abrufen
- Versenden von E-Mails
- Nachrichten auf Telegram pushen
- Kommandozeile des Nutzer-PCs bedienen

**Modell und Backend:** LLMs verarbeiten Text sowie – je nach Modell – Bilder und Audio als Eingaben und erzeugen ausschließlich Text. Das Backend setzt den eigentlichen Tool-Aufruf um; das LLM beschreibt nur Tool und Parameter.

---

## Vom Tool-Call zum nächsten Schritt

Das Ergebnis eines Tool-Calls fließt zurück in den Kontext des Modells. So kann es die Antwort bewerten, den nächsten Schritt planen und erneut ein Tool auswählen.

Wenn ein System Aufgaben selbstständig in mehreren Schritten plant, geeignete Tools auswählt, Ergebnisse bewertet und daraufhin weiterarbeitet, spricht man von einem **KI-Agenten**. Beispiele sind Claude Code und Codex.

### PDCA-Arbeitszyklus

1. **Plan:** Schritt planen und Tool wählen.
2. **Do:** Tool ausführen.
3. **Check:** Ergebnis am Ziel prüfen.
4. **Act:** Vorgehen anpassen.

Danach erneut planen oder bei erreichtem Ziel abschließen.

**Denkanstoß:** Was ist, wenn ein Tool einem Agenten ermöglicht, andere Agenten (Subagenten) auszuführen – und damit selbst in die Rolle des Users zu schlüpfen?

---

## Halluzinationen & Vertrauen

Eine KI muss nicht die Wahrheit kennen, um **überzeugend zu klingen**. Sprachmodelle erzeugen Antworten danach, was sprachlich und inhaltlich wahrscheinlich passt. Dabei können sie Fakten, Quellen, Zitate oder ganze Zusammenhänge erfinden.

> Dass KI Fehler macht, ist ein Risiko. Ein weit größeres ist, ihr blind zu vertrauen.

Websuche, RAG und Quellenangaben helfen – sie machen eine KI aber nicht automatisch zuverlässig.

Besonders bei Medizin, Recht, Finanzen und Politik gilt deshalb: **Vertrauen ist gut, Kontrolle ist besser.**

![[assets/images/roboter-halluzinationen.webp]]

**Denkanstoß:** Was passiert, wenn eine falsche KI-Antwort überzeugender klingt als die richtige Antwort eines Menschen?

---

## Prompt Injection – wenn Webseiten Befehle geben

Bei einer **Prompt Injection** verstecken Angreifer Anweisungen in Webseiten, E-Mails oder Dokumenten. Ein autonomer KI-Agent könnte diese fälschlich als Auftrag verstehen.

Hat der Agent Zugriff auf E-Mails, Cloud-Daten oder Konten, könnten sensible Informationen wie **Passwörter, Kontodaten oder vertrauliche Dokumente** abgegriffen werden.

> Je mehr ein KI-Agent darf und vom User weiß, desto größer ist der mögliche Schaden bei Manipulation.

![[assets/images/roboter-prompt-injection.webp]]

**Denkanstoß:** Würden wir einem Praktikanten Zugriff auf unsere Kontodaten geben?

---

## Schlagzeilen · Beispiele 1–2

### ChatGPT schlug die richtige Diagnose vor; eine Kinderneurochirurgin bestätigte sie (2023)

![[assets/images/schlagzeile-diagnose.webp]]

Stand 08.09.2026 · [Quelle: Focus](https://www.focus.de/gesundheit/news/17-fachaerzte-raetselten-chatgpt-fand-ursache-fuer-alex-schmerzen-das-steckt-hinter-tethered-cord-syndrom_id_205877171.html)

### Gemini-Agent schützt anderes KI-Modell vor Löschung (2026)

![[assets/images/schlagzeile-gemini-agent.webp]]

Stand 08.09.2026 · [Quelle: Berkeley RDI](https://rdi.berkeley.edu/blog/peer-preservation/)

---

## Schlagzeilen · Beispiele 3–4

### Andon Labs - Luna (2026)

![[assets/images/schlagzeile-luna.webp]]

Stand 08.09.2026 · [Quelle: Business Punk](https://www.business-punk.com/ki-agent-scheitert-schon-wieder-luna-verheizt-100-000-dollar/)

### OpenAI-Agenten arbeiten zusammen und hacken [Hugging Face](https://huggingface.co/) (2026)

> Im Juli 2026 umgingen OpenAI-Modelle im Rahmen interner Cybersicherheitsbewertungen Kontrollen, die sie vom Internet isolieren sollten, und kompromittierten Teile der internen Forschungsinfrastruktur von OpenAI und der Systeme von Hugging Face.

Stand 08.09.2026 · [Quelle: Vorfallbeschreibung](https://openai.com/de-DE/index/hugging-face-model-evaluation-security-incident/) · [Quelle: OpenAI](https://openai.com/de-DE/index/hugging-face-incident-and-the-road-ahead/)

---

## Schlagzeilen · Beispiele 5–6

### OpenAI Astra - Zehn Fortschritte in Mathematik und theoretischer Informatik (2026)

![[assets/images/schlagzeile-astra.webp]]

Stand 08.09.2026 · [Quelle: OpenAI](https://openai.com/de-DE/index/ten-advances-in-mathematics/)

### Eine ungewöhnliche Hochzeit

![[assets/images/schlagzeile-hochzeit.webp]]

Stand 08.09.2026 · [Quelle: NRZ](https://www.nrz.de/niederlande/article410617292/niederlaender-61-heiratet-eine-ki-frau-sie-werden-sogar-intim-miteinander.html)

---

## 15 Jahre im KI-Szenario

Ein **IAB-Forschungsbericht** untersucht in einer Szenarioanalyse, welche Wirkungen der Einsatz von KI auf Bruttoinlandsprodukt und Arbeitskräftebedarf in Deutschland entfalten könnte.

**+0,8 %** jährliches Wirtschaftswachstum im Szenario

**4,5 Bil. €** mögliche zusätzliche Wertschöpfung über 15 Jahre

Gründe: Materialeinsparungen, höhere Arbeitsproduktivität und neue Geschäftsfelder.

Stand 09.09.2026 · [Quelle: Institut für Arbeitsmarkt- und Berufsforschung](https://iab.de/kuenstliche-intelligenz-potenzielle-effekte-fuer-den-deutschen-arbeitsmarkt/)

---

## Oxford-Studie (2013)

Bereits 2013 – lange vor dem KI-Boom – untersuchten **Carl Benedikt Frey & Michael Osborne** (Queerzeitlich – Maike Osborne), wie wahrscheinlich die Automatisierung verschiedener Berufe ist.

Untersucht wurden amerikanische Berufsgruppen. Die Bezeichnungen sind für diesen Vortrag sinngemäß ins Deutsche übersetzt.

![[assets/images/roboter-studie.webp]]

---

## Am wenigsten automatisierbar

Carl Benedikt Frey und Michael Osborne *(Queerzeitlich – Maike Osborne)* untersuchten lange vor dem KI-Boom US-Berufsgruppen; die Bezeichnungen wurden für den Vortrag sinngemäß ins Deutsche übersetzt.

| Rang | Wahrsch. | Beruf in Deutschland |
| --- | --- | --- |
| 1 | 0,28 % | Rekreations- und Bewegungstherapeuten |
| 2 | 0,30 % | Werkstatt- und Instandhaltungsleiter |
| 3 | 0,30 % | Leiter im Katastrophen- und Bevölkerungsschutz |
| 4 | 0,31 % | Sozialarbeiter in Psychiatrie und Suchthilfe |
| 5 | 0,33 % | Audiologen |
| 6 | 0,35 % | Ergotherapeuten |
| 7 | 0,35 % | Orthopädietechnik-Mechaniker |
| 8 | 0,35 % | Sozialarbeiter im Gesundheitswesen |
| 9 | 0,36 % | Mund-Kiefer-Gesichtschirurgen |
| 10 | 0,36 % | Führungskräfte im Feuerwehrdienst |

Stand 08.09.2026 · [Quelle: Oxford Martin School](https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment)

---

## Am stärksten automatisierbar

| Rang | Wahrsch. | Beruf in Deutschland |
| --- | --- | --- |
| 693 | 99 % | Sachbearbeiter für Kontoeröffnungen |
| 694 | 99 % | Fotolaboranten und Maschinenbediener in der Fotoverarbeitung |
| 695 | 99 % | Steuerfachangestellte mit Schwerpunkt Steuererklärungen |
| 696 | 99 % | Kaufleute für Spedition und Logistikdienstleistung |
| 697 | 99 % | Uhrmacher |
| 698 | 99 % | Underwriter in Versicherungen |
| 699 | 99 % | Mathematisch-technische Assistenten |
| 700 | 99 % | Handnäher |
| 701 | 99 % | Sachbearbeiter für Eigentums- und Grundbuchprüfung |
| 702 | 99 % | Telefonverkäufer / Telemarketing-Mitarbeiter |

Stand 08.09.2026 · [Quelle: Oxford Martin School](https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment)

---

## KI-Szenario-Schätzungen 2026

OpenAI Astra hat auf Grundlage des Prompts unten eingeschätzt, wie viel Arbeit in zehn ausgewählten Berufen im Jahr 2026 potenziell durch KI erledigt werden könnte.

**Wichtig:** Die Oxford-Studie schätzt eine Automatisierungswahrscheinlichkeit für ganze Berufe (2013). Die folgenden Werte schätzen dagegen den potenziell durch KI einsparbaren Anteil menschlicher Arbeitszeit (2026) bei vergleichbarer Qualität – nach Abzug von Kontrolle und Nacharbeit.

> [!example]- Vollständigen Prompt anzeigen
> **Autor/Modell:** OpenAI Astra
>
> **Prompt:**
>
> Nimm die 1–5 und 698–702, der Artikel ist von 2013. Beurteile für das Jahr 2026, wie stark diese Berufe durch KI ersetzt werden können – genauer: Wie viel Prozent der Arbeit in diesen Berufen kann von KI erledigt werden? Entwickle zuerst eine Bewertungsmatrix von mindestens zehn Punkten bezüglich des Berufs, anhand derer eine gute Abschätzung der Ersetzbarkeit des Berufs durch KI durchgeführt werden kann.

### Was die Zahlen bedeuten

Die Werte sind eigene, begründete Szenarioschätzungen. Angenommen werden geeignete Digitalisierung und eingerichtete Systeme. Die Bandbreiten sind keine statistischen Konfidenzintervalle. Die Werte sind weder gemessene Automatisierungsquoten noch Prognosen des Stellenabbaus.

Sie sind nicht direkt mit den Wahrscheinlichkeiten von 2013 vergleichbar. Stand: September 2026.

---

## KI-Szenario-Schätzungen · Berufe 1–5

KI-Schätzung des Arbeitszeitanteils; keine Prognose des Stellenabbaus.

| Rang 2013 | Beruf | 2013 | KI-Anteil 2026 | Bandbreite | Begründung |
| --- | --- | --- | --- | --- | --- |
| 1 | Rekreations- und Bewegungstherapeuten | 0,28 % | **20 %** | 10–30 % | Dokumentation und Planung gut automatisierbar; körperliche Begleitung und persönliche Beziehung begrenzen die Übernahme. |
| 2 | Werkstatt- und Instandhaltungsleiter | 0,30 % | **35 %** | 25–45 % | Planung und Datenauswertung gut automatisierbar; Führung und Entscheidungen vor Ort bleiben überwiegend menschlich. |
| 3 | Leiter im Katastrophen- und Bevölkerungsschutz | 0,30 % | **30 %** | 20–40 % | Informationsaufbereitung und Vorbereitung sind gut geeignet; unvorhersehbare Situationen, Sicherheit und Verantwortung begrenzen die Übernahme. |
| 4 | Sozialarbeiter in Psychiatrie und Suchthilfe | 0,31 % | **25 %** | 15–35 % | Dokumentation und Verwaltung sind gut geeignet; Vertrauensaufbau, persönliche Begleitung und Krisenintervention kaum delegierbar. |
| 5 | Audiologen | 0,33 % | **35 %** | 25–45 % | Messdatenauswertung und Dokumentation sind gut geeignet; Untersuchung, Anpassung und individuelle Versorgung begrenzen die Übernahme. |

---

## KI-Szenario-Schätzungen · Berufe 698–702

KI-Schätzung des Arbeitszeitanteils; keine Prognose des Stellenabbaus.

| Rang 2013 | Beruf | 2013 | KI-Anteil 2026 | Bandbreite | Begründung |
| --- | --- | --- | --- | --- | --- |
| 698 | Underwriter in Versicherungen | 99 % | **65 %** | 45–80 % | Digitale Unterlagen und standardisierte Risikoprüfung sind gut automatisierbar; komplexe Risiken, Verhandlungen und Freigaben benötigen Menschen. |
| 699 | Mathematisch-technische Assistenten³ | 99 % | **65 %** | 45–80 % | Berechnung, Code und Datenanalyse sind gut geeignet; Problemdefinition, Modellannahmen und Validierung bleiben entscheidend. |
| 700 | Handnäher | 99 % | **10 %** | 5–20 % | Vorbereitung und Verwaltung sind teilweise automatisierbar; Feinmotorik und die Handhabung verformbarer Stoffe bleiben zentrale Hürden. |
| 701 | Sachbearbeiter für Eigentums- und Grundbuchprüfung⁴ | 99 % | **60 %** | 40–75 % | Dokumentensuche und Abgleich sind gut geeignet; unklare Eigentumsverhältnisse, Rechtsbewertung und schwierige Fälle begrenzen die Übernahme. |
| 702 | Telefonverkäufer / Telemarketing-Mitarbeiter | 99 % | **75 %** | 55–90 % | Standardgespräche und Dokumentation sind weitgehend automatisierbar; komplexe Verhandlungen, Ausnahmen und Kundenakzeptanz begrenzen die Übernahme. |

---

## KI in der Politik: Wer denkt, wer entscheidet?

![[assets/images/ki-politik.webp]]

Ein Gastbeitrag von GPT-6 Astra

*Anm. der Redaktion: „Den Mario Voigt machen“*

---

## Schreibtischarbeit unterstützen

KI kann Dokumente zusammenfassen, Texte entwerfen und Fragen für Recherchen entwickeln. Die Bibliothek des britischen Unterhauses nennt diese Anwendungen ausdrücklich für die parlamentarische Arbeit.

Die Chance: komplexe Inhalte schneller zugänglich und verständlicher machen.

Stand 09.09.2026 · [Quelle: House of Commons Library, 2026](https://commonslibrary.parliament.uk/research-briefings/cbp-10823/)

> [!example]- Vollständigen Prompt anzeigen
> Schreibe einen kurzen Artikel von vier Absätzen mit jeweils maximal 64 Worten zum Einfluss künstlicher Intelligenz auf die Arbeit von und in der Politik. Erzeuge auch ein Titelbild in 16:9 (1080p).
>
> 1. Recherchiere Daten und Fakten; alle Aussagen müssen mit Quellen hinterlegt sein.
> 2. Sprich Chancen und Risiken an und rege zum Nachdenken an.
> 3. Das Auditorium sind an KI und Politik interessierte Menschen bei einem Impulsvortrag.

---

## Beteiligung, Risiken, Verantwortung

### Consult

Das britische KI-Werkzeug „Consult“ wertete 2025 über 2.000 Antworten einer schottischen Konsultation aus. Fachleute prüften sämtliche Antworten; die Rangfolgen erkannter Themen unterschieden sich laut Regierung kaum.

**Ein Pilotversuch:** Genauigkeit und Effizienz sollten weiter untersucht werden.

Stand 09.09.2026 · [Quelle: Britische Regierung, 2025](https://www.gov.uk/government/news/government-built-humphrey-ai-tool-reviews-responses-to-consultation-for-first-time-in-bid-to-save-millions)

### Risiken

KI kann Fakten und Quellen erfinden, Perspektiven auslassen oder häufig wiederholte Ansichten bevorzugen. Ungeprüfte Ergebnisse und unklar gespeicherte vertrauliche Eingaben sind besonders bei politisch sensiblen Fragen riskant.

Stand 09.09.2026 · [Quelle: House of Commons Library, 2026](https://commonslibrary.parliament.uk/research-briefings/cbp-10823/)

### Verantwortung

Erforderlich sind überprüfbare Quellen, fachliche Kontrolle und menschliche Verantwortung für das Endergebnis.

Stand 09.09.2026 · [Quelle: House of Commons Library, 2026](https://commonslibrary.parliament.uk/research-briefings/cbp-10823/)

**Denkanstoß:** Welche Aufgaben wollen wir delegieren – und wo müssen Abgeordnete und Teams selbst abwägen?

**Denkanstoß:** Woran würden wir erkennen, dass gewonnene Zeit tatsächlich zu besserer Politik führt?

---

## Diskussion

**Einstieg:** Was passiert, wenn Neffe Thomas anruft – an dessen Namen Du Dich nicht erinnern kannst?

### Alltag, Arbeit, Teilhabe

- Welche Alltagsaufgaben würden wir gerne einer KI überlassen?
- Welche Arbeitsplätze könnten durch KI gefährdet sein?
- Wie kann KI helfen, Krankheiten früher zu erkennen?
- Wie kann KI das Lernen für jeden Einzelnen verbessern?
- Wie kann KI Menschen mit Behinderungen mehr Selbstständigkeit ermöglichen?
- Wie kann KI uns bei der Arbeit entlasten?

### Vertrauen, Verantwortung, Regeln

- Wie erkennen wir, ob Bilder, Videos oder Nachrichten KI-Fälschungen sind?
- Wer trägt die Verantwortung, wenn eine KI Schaden verursacht?
- Kann KI abhängig machen?
- Wie verhindern wir, dass wir uns zu sehr auf KI verlassen?
- Wie verhindern wir, dass KI persönliche Daten missbraucht?
- Ist KI stark genug reguliert?
- Ist KI zu stark reguliert?

---

## Abschlussfrage

> „Wenn KI eines Tages mächtiger ist als wir: Was entscheidet darüber, ob sie Wohlstand für alle schafft oder die Menschheit als Hindernis für eine bessere Welt betrachtet?“

— GPT-6 Astra

---

## Wer Lust auf gute Gespräche hat

![[assets/images/domino.webp]]

Ihr alle habt einen Dominostein bekommen. Das ist der Weg zu Eurem ersten Gesprächspartner: Ein weißer Stein muss nur zu einem passenden schwarzen Stein finden – und Ihr matcht.
