--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: joao
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
);


ALTER TABLE public.urls OWNER TO joao;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: joao
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO joao;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: joao
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: joao
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
);


ALTER TABLE public.users OWNER TO joao;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: joao
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO joao;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: joao
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: joao
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: joao
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: joao
--

COPY public.urls (id, "userId", "shortUrl", url, "visitCount", "createdAt") FROM stdin;
20	12	ANQ4M-NhDe	https://github.com/jvcamargo02?tab=repositories	5	2022-08-08 09:57:09.461296
44	8	EN9eUWdcNo	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 10:00:38.721438
8	5	dH5GeDeAud	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
9	5	_1yi9Ur_go	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
10	5	gh5UAY6Pls	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
11	14	1ijhBJnAMr	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
12	14	Q87KZeerKG	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
13	15	QE2oTKLCmy	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
14	15	px8Luntff_	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
15	15	wKbdmuKSYp	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
16	15	Fw8Z4iIrIT	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
17	13	E6qOAsoLhu	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
18	13	-nTf3k-RiZ	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
19	13	7qnaOzV2gK	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
21	12	O5Ekkfg_ih	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
22	12	pzzPn5AWaA	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
23	12	T1mJujNq8A	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
24	12	LXGJsSj60J	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
25	12	nAS8vvKdEX	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
26	12	zJoe7Ggs3K	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
27	12	9mYXmmHh8B	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
28	12	gs1J_DpM9r	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
29	12	utsMxrYLMl	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
30	11	HS6xujleZp	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
31	10	mw2GhlClhG	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
32	9	y9MO_vHe80	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
33	9	AKGF7ktoV1	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
34	9	2jzRcdq623	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
35	9	v8QrKLgP9W	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
36	6	8XnHXRdADA	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
37	6	Md2Wj-EijL	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
38	6	TqTqdMlCOf	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
39	6	P1dyMwJ8cW	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
40	7	BMHQDbzSx7	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
41	7	L74iI8dlOq	https://github.com/jvcamargo02?tab=repositories	0	2022-08-08 09:57:09.461296
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: joao
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
5	João	joao@g.com	$2b$10$yjKTTPPESXnQX.TytjnhFe74wzTsavESbVqfxQs7xppjJdTL15Lom	2022-08-08 09:57:55.688276
6	João	joao@gmail.com	$2b$10$7cbdWRreOiE7zgGp0dZIF.mu6N22jNhCtrljTsPvG3mmAOaTTeb8m	2022-08-08 09:57:55.688276
7	João	joao@driven.com	$2b$10$eC7j1kpTn2j2FBgi88iD5u/GvVCCasdjIUNtGuYcFzf1aCDfUFG8u	2022-08-08 09:57:55.688276
8	João	joao@driven.com.br	$2b$10$pnfwW5KM3rephhEONIXPzet.YjohNZibD0qrkIc4x/zIBeo/Bsg3u	2022-08-08 09:57:55.688276
9	João43	joao@infnet.com.br	$2b$10$DDDcjftDZIudBUJvejwBluc/Sa0XJA2./au5kCSuHkkD3QZXmTpGu	2022-08-08 09:57:55.688276
10	Joãoe43	joao@infnt.com.br	$2b$10$PRXwdseCzJJjQm1pu1HpkeFz.dE0b7E07BOQA1bk8ocCdQ8x3N0TK	2022-08-08 09:57:55.688276
11	Joã43	joao@innt.com.br	$2b$10$38SMT1rjlIwcmL0ZkyGpVeOglIcCKUg1yrcOzgSigEcxiCRkj9vpy	2022-08-08 09:57:55.688276
12	Joã43	joao@bol.com.br	$2b$10$Xg3Z3nv1blUolpBHBi5KruGVK4JFy4Vkbo0j1Ra26ZBn3FUz4YfTO	2022-08-08 09:57:55.688276
13	Joã43	joao@ifood.com.br	$2b$10$ujka5vgDQlOj/4UGmxXPjOewLCxujyUdoIb7fbxyc/giR.U/4i3MW	2022-08-08 09:57:55.688276
14	Joã473	joao@ambev.com.br	$2b$10$jrz/7OLPv.0DsfkiDL6IcuIzkOhNF02Ug2yeSEBfzhfDfp3pnSwG2	2022-08-08 09:57:55.688276
15	Joã4473	jo5ao@ambev.com	$2b$10$TuuSdRyLrbZylu18jS/15ueVcmlZrsyVsF2nW6ld17UHDU8b57MI2	2022-08-08 09:57:55.688276
16	Joã4473	jo554ao@ambev.com	$2b$10$k1Cu3OmbEd1kZsugmjTQveXva2zc4eHZ0AgglQ8kV6VDTpES4HI5y	2022-08-08 10:00:46.893628
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joao
--

SELECT pg_catalog.setval('public.urls_id_seq', 44, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joao
--

SELECT pg_catalog.setval('public.users_id_seq', 16, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: joao
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: joao
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: joao
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: joao
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

