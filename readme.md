# (PT-BR | English below)  
⚠️ **Cuidado com golpes no LinkedIn** ⚠️  

Olá, rede! Resolvi compartilhar um alerta importante sobre golpes envolvendo propostas de trabalho aqui, especialmente em áreas envolvendo: **#Threejs**, **#WebGL** e **#Blockchain**.  

Recentemente, fui abordada para uma entrevista em uma empresa internacional que parecia legítima. Apesar de ter desconfiado inicialmente, fiz pesquisas sobre a empresa, a abordagem parecia igual à de outros recrutadores legítimos que já me contataram aqui e, infelizmente, era um golpe. 🥲  

Depois de ler um post do **Luiz Fernando** sobre golpes relacionados a empresas de Blockchain, resolvi conversar com ele (obrigada, Luiz! 🙌) e buscar respostas. Aprendi e decidi compartilhar minha experiência e dicas que podem ajudar outras pessoas a se protegerem.  

---

## 🚀 Mantenha a calma e bora lá:  

É muito comum que a pessoa que te aborde se apresente como um desenvolvedor ou alguém da área técnica, o que pode tornar a proposta mais convincente. Geralmente, depois o perfil é apagado e a conversa some.  

---

### 🔍 Verifique a existência da empresa:  
Muitos golpes envolvem empresas que só "existem" no LinkedIn. Por isso, é importante pesquisar sobre a organização:  
- Procure o **site oficial** (se existir) e busque evidências de sua legitimidade, como **CNPJ**, **sede** e pessoas que trabalham na empresa.  
- Entre em contato direto com a empresa, seja por e-mail ou com algum recrutador aqui no LinkedIn, para confirmar se a pessoa que te abordou realmente faz parte da equipe.  

---

### 🛡️ Valide o projeto (antes de rodar):  
- **Revise o código e as dependências:** Analise tudo com calma antes de clonar o repositório. 🧩  
- **Cheque a reputação do repositório:** Verifique se ele é confiável, popular e possui avaliações positivas ou contribuições consistentes. *(Procure por pessoas que contribuíram com o projeto.)*  

---

### 🔒 Medidas de segurança ao rodar projetos desconhecidos:  
- **Execute em um ambiente isolado:** 🐋 Use ferramentas como **containers** (Docker) ou **máquinas virtuais** (VM) 🖥️ para minimizar os riscos (se possível).  
- **Verifique vulnerabilidades nas dependências:** Utilize ferramentas como `npm audit` ou `yarn audit`.  
- **Mantenha tudo atualizado:** Atualize seu navegador, sistema operacional e não esqueça do bom antivírus! 🛡️  

---

### 🚨 Se você já contribuiu com um projeto malicioso:  
Se desconfia que foi golpe e já se passaram dias, provavelmente o dano já foi feito. Para minimizar riscos:  
- **Formate sua máquina** e evite manter senhas salvas em navegadores.  
- **Troque senhas de contas importantes** e ative a **autenticação em dois fatores (2FA)** sempre que possível.  

---

### 💻 Como funcionam esses golpes?  
No meu caso, após revisar o código ao qual contribuí, percebi que ele continha uma vulnerabilidade de **XSS (Cross-Site Scripting)**. Esse tipo de ataque pode:  
- Acessar **cookies**, **tokens de sessão** e outras informações sensíveis.  
- Espalhar malware, modificar conteúdos de sites e até facilitar **phishing** para roubo de credenciais.  

---

✨ **Se algo parecer suspeito, investigue a fundo antes.** ✨  
