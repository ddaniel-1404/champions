let dados = [
    {
        titulo: "Real Madrid",
        descricao: "O Real Madrid é, sem dúvida, o clube mais vitorioso da história da Liga dos Campeões da UEFA. Com uma tradição que se estende por décadas, o time merengue construiu um legado imbatível na principal competição de clubes da Europa.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50051--real-madrid/"
    },
    {
        titulo: "Barcelona",
        descricao: "O Barcelona é um dos clubes de futebol mais populares e bem-sucedidos do mundo, conhecido por seu estilo de jogo ofensivo e sua base de torcedores apaixonados.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50080--barcelona/"
    },
    {
        titulo: "Manchester City",
        descricao: "O Manchester City é um dos clubes de futebol mais ricos do mundo, conhecido por seus investimentos em grandes jogadores e seu domínio recente na Premier League.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/52919--man-city/" 
    },
    {
        titulo: "Bayern de Munique",
        descricao: "O Bayern de Munique é um dos clubes mais tradicionais da Alemanha, conhecido por sua disciplina tática e sua hegemonia no futebol alemão.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50037--bayern-munchen/"
    },
    {
        titulo: "Paris Saint-Germain",
        descricao: "O Paris Saint-Germain é um dos clubes mais ricos da França, conhecido por seus grandes investimentos e por ter possuído os melhores jogadores do mundo, Neymar, Messi e Mbapeé.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/52747--paris/"
    },
    {
        titulo: "Liverpool",
        descricao: "O Liverpool é um dos clubes de futebol mais populares da Inglaterra, conhecido por sua torcida apaixonada e sua rica história na Liga dos Campeões.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/7889--liverpool/"
    },
    {
        titulo: "Inter de Milão",
        descricao: "A Inter de Milão é um dos clubes mais tradicionais da Itália, conhecido por sua rivalidade com o Milan e por suas conquistas na Liga dos Campeões.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50138--inter/"
    },
    {
    titulo: "Borussia Dortmund",
    descricao: "O Borussia Dortmund é um dos clubes mais populares da Alemanha, conhecido por sua torcida apaixonada e por revelar grandes talentos.",
    informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
    link: "https://www.uefa.com/uefachampionsleague/history/clubs/52758--b-dortmund/"
    },
    {
    titulo: "RB Leipzig",
    descricao: "O RB Leipzig é um clube relativamente novo no futebol alemão, mas que rapidamente se tornou uma força a ser considerada, graças a seus investimentos e seu estilo de jogo ofensivo.",
    informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
    link: "https://www.uefa.com/uefachampionsleague/history/clubs/2603790--leipzig/"
    },
    {
        titulo: "Bayer Leverkusen",
        descricao: "O Bayer Leverkusen é um clube alemão conhecido por sua base sólida e por revelar talentos para o futebol mundial.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50109--leverkusen/"
    },
    {
        titulo: "Atlético de Madrid",
        descricao: "O Atlético de Madrid é um dos clubes mais tradicionais da Espanha, conhecido por sua defesa sólida e seu estilo de jogo intenso.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50124--atleti/"
    },
    {
        titulo: "Atalanta",
        descricao: "A Atalanta é um clube italiano que nos últimos anos tem surpreendido a todos com suas campanhas na Champions League e na Serie A.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/52816--atalanta/"
    },
    {
        titulo: "Juventus",
        descricao: "A Juventus é um dos clubes mais tradicionais da Itália, conhecido por sua história vitoriosa e por sua torcida apaixonada.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50139--juventus/"
    },
    {
        titulo: "Benfica",
        descricao: "O Benfica é um dos clubes mais populares de Portugal, conhecido por sua formação de jovens talentos e por sua história vitoriosa.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50147--benfica/"
    },
    {
        titulo: "Arsenal",
        descricao: "O Arsenal é um dos clubes mais tradicionais da Inglaterra, conhecido por seu estilo de jogo ofensivo e por sua base de torcedores apaixonados.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/52280--arsenal/"
    },
    {
        titulo: "Club Brugge",
        descricao: "O Club Brugge é um dos clubes mais bem-sucedidos da Bélgica, conhecido por sua história vitoriosa no campeonato nacional.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50043--club-brugge/"
    },
    {
        titulo: "Shakhtar Donetsk",
        descricao: "O Shakhtar Donetsk é um dos clubes mais fortes da Ucrânia, conhecido por seu estilo de jogo técnico e por suas campanhas na Champions League.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/52707--shakhtar/"
    },
    {
        titulo: "Milan",
        descricao: "O Milan é um dos clubes mais tradicionais da Itália, conhecido por sua rivalidade com a Inter e por suas conquistas na Liga dos Campeões.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50058--milan/"
    },
    {
        titulo: "Feyenoord",
        descricao: "O Feyenoord é um dos clubes mais populares da Holanda, conhecido por sua torcida apaixonada e por sua história vitoriosa.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/52749--feyenoord/"
    },
    {
        titulo: "Sporting",
        descricao: "O Sporting é um dos big three de Portugal, conhecido por sua formação de jovens talentos e por sua rivalidade com Benfica e Porto.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50149--sporting-cp/"
    },
    {
        titulo: "PSV Eindhoven",
        descricao: "O PSV Eindhoven é um dos clubes mais tradicionais da Holanda, conhecido por sua história vitoriosa e por revelar grandes talentos para o futebol mundial.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50062--psv/"
    },
    {
        titulo: "Celtic",
        descricao: "O Celtic é um dos clubes mais populares da Escócia, conhecido por sua torcida apaixonada e por sua rivalidade com o Rangers.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50050--celtic/"
    },
    {
        titulo: "Monaco",
        descricao: "O Monaco é um clube francês conhecido por revelar grandes talentos e por suas campanhas surpreendentes na Champions League.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50023--monaco/"
    },
    {
        titulo: "Aston Villa",
        descricao: "O Aston Villa é um dos clubes mais tradicionais da Inglaterra, com uma rica história e uma torcida apaixonada.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/52683--aston-villa/"
    },
    {
        titulo: "Bologna",
        descricao: "O Bologna é um clube italiano com uma longa história, conhecido por sua rivalidade com o Bologna e por suas campanhas na Serie A.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/52969--bologna/"
    },
    {
        titulo: "Girona",
        descricao: "O Girona é um clube espanhol que nos últimos anos tem se destacado no futebol espanhol, chegando à primeira divisão.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/2602798--girona/"
    },
    {
        titulo: "Stuttgart",
        descricao: "O Stuttgart é um clube alemão com uma longa história, conhecido por suas conquistas na Bundesliga.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50107--stuttgart/"
    },
    {
        titulo: "Sturm Graz",
        descricao: "O Sturm Graz é um dos clubes mais bem-sucedidos da Áustria, conhecido por sua história vitoriosa no campeonato nacional.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50111--sturm-graz/"
    },
    {
        titulo: "Brest",
        descricao: "O Brest é um clube francês que nos últimos anos tem se destacado no futebol francês, chegando à Ligue 1.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/2601306--brest/"
    },
    {
        titulo: "Dínamo Zagreb",
        descricao: "O Dínamo Zagreb é um dos clubes mais fortes da Croácia, conhecido por sua história vitoriosa e por suas campanhas na Champions League.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50164--gnk-dinamo/"
    },
    {
        titulo: "Estrela Vermelha",
        descricao: "A Estrela Vermelha é um dos clubes mais populares da Sérvia, conhecido por sua rica história e por sua torcida apaixonada.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50069--crvena-zvezda/"
    },
    {
        titulo: "Slovan Bratislava",
        descricao: "O Slovan Bratislava é um dos clubes mais tradicionais da Eslováquia, conhecido por sua história vitoriosa no campeonato nacional.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/52797--s-bratislava/"
    },
    {
        titulo: "Lille",
        descricao: "O Lille é um clube francês que nos últimos anos tem se destacado no futebol francês, conquistando o título da Ligue 1.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/75797--lille/"
    },
    {
        titulo: "Young Boys",
        descricao: "O Young Boys é um dos clubes mais tradicionais da Suíça, conhecido por sua formação de jovens talentos e por suas campanhas na Champions League.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50031--young-boys/"
    },
    {
        titulo: "RB Salzburg",
        descricao: "O RB Salzburg é um clube austríaco conhecido por seu estilo de jogo ofensivo e por suas campanhas na Champions League.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50030--salzburg/"
    },
    {
        titulo: "Sparta Praga",
        descricao: "O Sparta Praga é um dos clubes mais tradicionais da República Tcheca, conhecido por sua história vitoriosa e por sua torcida apaixonada.",
        informacoes: "Quer saber mais? Clique no nome do time ou jogador para ver mais informações.",
        link: "https://www.uefa.com/uefachampionsleague/history/clubs/50033--sparta-praha/"
    }
    ];
