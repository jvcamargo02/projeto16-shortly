import pg from "pg";
import dotenv from "dotenv"

dotenv.config()


export async function createTables() {

    const { Pool } = pg;

    const connection = new Pool({
        connectionString: process.env.DB_URL
    });


    try {
        await connection.query(`SET statement_timeout = 0;
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
        
        
        ALTER TABLE public.urls OWNER TO ${process.env.DB_USER};
        
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
        
        
        ALTER TABLE public.urls_id_seq OWNER TO ${process.env.DB_USER};
        
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
        
        
        ALTER TABLE public.users OWNER TO ${process.env.DB_USER};
        
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
        
        
        ALTER TABLE public.users_id_seq OWNER TO ${process.env.DB_USER};
        
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
        
        `)
    } catch (e) {
        console.log(e);
    }
}

createTables();