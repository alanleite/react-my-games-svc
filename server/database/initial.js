const db = require('./index')

module.exports = async function () {
    let Game = db.models.Game
    let games = await Game.find()
    if (games.length === 0) {
        await Game.insertMany([
            {
                name: 'Horizon Zero Dawn',
                url: 'https://s3-sa-east-1.amazonaws.com/totvs-alan/games/horizon.jpeg',
                description: `
                Assuma o papel da habilidosa caçadora Aloy ao explorar um mundo exuberante habitado por criaturas misteriosas em um novo e emocionante jogo de ação/RPG em mundo aberto exclusivo para o sistema PlayStation®4.

                Um exuberante mundo pós-apocalíptico
                Como as máquinas dominaram esse mundo e o que pretendem? O que aconteceu com a civilização que habitava esse lugar? Vasculhe cada canto de um reino repleto de relíquias antigas e construções misteriosas
                para desvendar o passado e desenterrar os vários segredos de uma terra esquecida.

                Desafie terríveis adversidades:
                o combate em Horizon Zero Dawn tem como base a velocidade e perspicácia de Aloy contra a força bruta e o tamanho das máquinas. Para vencer um inimigo muito maior e tecnologicamente superior, Aloy deve usar todo o seu conhecimento, além de sua inteligência e agilidade, para sobreviver a cada confronto.
                `
            },
            {
                name: 'Tekken 7',
                url: 'https://s3-sa-east-1.amazonaws.com/totvs-alan/games/tekken.jpeg',
                description: `
                Cerre os punhos e se prepare para o combate definitivo da nova geração de consoles. Desenvolvida no Unreal Engine 4, a franquia de luta está de volta para mais um round com TEKKEN 7. Com seu fiel sistema de batalha 3D e sua jogabilidade intacta, TEKKEN 7 leva a franquia a um novo patamar, com gráficos fotorrealistas e novos recursos e mecânicas de luta. TEKKEN 7 traz de volta a atitude, a competitividade e a demonstração de habilidade enraizadas em seu DNA arcade para proporcionar a experiência de jogo de luta definitiva.
                `
            },
            {
                name: 'Destiny 2',
                url: 'https://s3-sa-east-1.amazonaws.com/totvs-alan/games/destiny.jpeg',
                description: `
                Destiny 2 é um jogo de tiro que te leva a uma viagem épica através do sistema solar. Você vai entrar em um mundo cheio de personagens interessantes e lutar para retomar nosso lar em uma campanha cinematográfica. Lute ao lado de amigos em vários modos cooperativos ou desafie os outros em intensas partidas multijogador.

                - Campanha rica e cinematográfica
                - Modos cooperativos divertidos e épicos
                - Intensas partidas multijogador 4x4, com 5 modos diferentes de PvP
                - Explore mundos e espaços inéditos e expansivos
                - Personalize as armas e armaduras de seu personagem com uma nova gama de equipamentos
                - Descubra Setores Perdidos, complete novas missões de Aventura ou entre em Eventos Públicos com outros Guardiões
                - Apresentando um novo sistema de Jogos Guiados, que ajuda jogadores a encontrarem grupos com interesses similares para participarem das atividades mais desafiadoras de Destiny 2, como as Incursões.
                `
            },
            {
                name: 'Grand Theft Auto V',
                url: 'https://s3-sa-east-1.amazonaws.com/totvs-alan/games/gta.jpeg',
                description: `
                Vivencie o jogo em mundo aberto aclamado pela crítica da Rockstar Games, Grand Theft Auto V.

                Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se envolvem com alguns dos criminosos mais assustadores e loucos do submundo, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.

                Grand Theft Auto V também vem com o Grand Theft Auto Online, o universo dinâmico e em constante evolução para até 30 jogadores, e inclui todas as melhorias de jogabilidade existentes e todos os conteúdos disponibilizados desde o lançamento do Grand Theft Auto Online. Suba na hierarquia para se tornar o CEO do seu próprio império criminoso, comercializando contrabandos ou formando um Motoclube para dominar as ruas. Realize Golpes cooperativos ousados, participe de corridas acrobáticas eletrizantes, compita em Modos Adversários exclusivos ou crie seu próprio conteúdo e compartilhe com toda a comunidade GTA.
                `
            },
            {
                name: 'Crash Bandicoot™ N. Sane Trilogy',
                url: 'https://s3-sa-east-1.amazonaws.com/totvs-alan/games/crash.jpeg',
                description: `
                Seu marsupial favorito, Crash Bandicoot™, está de volta! Ele está aprimorado, inspirado e preparado para a coleção de jogos da trilogia insana. Agora você pode experimentar Crash Bandicoot como nunca antes. Gire, pule, golpeie e repita conforme você enfrentar as aventuras e os desafios épicos através dos três jogos que deram início a tudo, Crash Bandicoot™, Crash Bandicoot™ 2: Cortex Strikes Back e Crash Bandicoot™: Warped. Reviva todos os seus momentos favoritos de Crash em seu apogeu gráfico totalmente remasterizado e se prepare para colocar um CRASH nos seus golpes!

                Software sujeito à licença e à garantia limitada (us.playstation.com/softwarelicense/br). É preciso ter uma conta para usar os recursos online, que estão sujeitos aos termos de serviço e à política de privacidade aplicável (playstationnetwork.com/terms-of-service e playstationnetwork.com/privacy-policy). A taxa única de licença dá o direito de jogar no sistema PS4™ principal designado e outros sistemas PS4™ quando está usando essa conta.
                `
            }
        ])
    }
    return { success: true }
}