import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
	Img,
	Link,
	Text,
} from '@chakra-ui/react';
import { registerEvent } from './utils/facebookPixelEvent';

function App() {
	const [show, setShow] = useState(localStorage.getItem('ended') === '1');

	const showContent = () => {
		setTimeout(() => {
			setShow(true);
			var s = document.createElement('script');
			(s.src = 'https://scripts.converteai.net/4ece02e9-03a2-4586-824c-644021abdf60/players/63e54fd4b0dd9c000bdc6429/player.js'),
				(s.async = !0),
				document.head.appendChild(s);
		}, 500);
	};

	const [interval, setInterval] = useState<number>(0);
	useEffect(() => {
		const newTime = localStorage.getItem('63e509ba1933a2000ed6e0fe') || '0';
		setTimeout(() => {
			if (parseInt(newTime) > 804) {
				showContent();
			} else {
				setInterval(interval + 3);
			}
		}, 3000);
	}, [interval]);

	useEffect(() => registerEvent(), []);

	return (
		<Flex w={'100%'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
			<Flex backgroundColor={'yellow'} color={'black'} justifyContent={'center'} w={'100%'}>
				<Text fontSize={'2rem'} fontWeight={'bold'} m={'1.5rem 0'} color={'white'}>
					Você foi selecionado para assistir esse vídeo 👇🏻
				</Text>
			</Flex>
			<Box w={'100%'} maxW={'1000px'} mt={'30px'}>
				<div id="vid_63e509ba1933a2000ed6e0fe" style={{ position: 'relative', width: '100%', padding: '54.68354430379747% 0 0' }}>
					<img
						id="thumb_63e509ba1933a2000ed6e0fe"
						src="https://images.converteai.net/4ece02e9-03a2-4586-824c-644021abdf60/players/63e509ba1933a2000ed6e0fe/thumbnail.jpg"
						style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
					/>
					<div
						id="backdrop_63e509ba1933a2000ed6e0fe"
						style={{ position: 'absolute', top: 0, width: '100%', height: '100%', filter: 'blur(5px)', backdropFilter: 'blur(5px)' }}
					></div>
				</div>
			</Box>

			<Flex justifyContent={'center'} alignItems="center" gap={'10px'}>
				<Img src="/ouvindo.png" maxW={'2.5rem'} />
				<Text fontSize={'1.3rem'} fontWeight={'bold'} color={'white'}>
					Verifique se seu áudio está ligado
				</Text>
			</Flex>

			{show ? (
				<Flex flexDir={'column'} bgImage={'bg.png'} w={'100%'} alignItems="center">
					<Text fontSize={'2.7rem'} fontWeight={'bold'} color={'white'} maxW={'1000px'}>
						ELA CONSEGUIU ELIMINAR <span className="pink">50 QUILOS E HOJE É MOTIVAÇÃO PARA MUITAS MULHERES</span>
					</Text>

					<Box w={'100%'} maxW={'1000px'} m={'30px 0'}>
						<div id="vid_63e54fd4b0dd9c000bdc6429" style={{ position: 'relative', width: '100%', padding: '55.95854922279793% 0 0' }}>
							<img
								id="thumb_63e54fd4b0dd9c000bdc6429"
								src="https://images.converteai.net/4ece02e9-03a2-4586-824c-644021abdf60/players/63e54fd4b0dd9c000bdc6429/thumbnail.jpg"
								style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
							/>
							<div
								id="backdrop_63e54fd4b0dd9c000bdc6429"
								style={{
									position: 'absolute',
									top: 0,
									width: '100%',
									height: '100%',
									backdropFilter: 'blur(5px)',
								}}
							></div>
						</div>
					</Box>
					<Flex bg={'white'} w={'100%'} p={'15px 0'} justifyContent={'center'} flexDir={'column'} alignItems={'center'}>
						<Text color={'black'} fontSize={'2rem'} fontWeight={'bold'} maxW={'1000px'} w={'100%'}>
							Clique no botão abaixo para adquirir o seu programa completo do Protocolo VOCÊ MAIS LEVE
						</Text>
						<Button
							_hover={{ background: '#115522' }}
							colorScheme={'green'}
							bg={'green'}
							fontSize={'1.7rem'}
							className={'animated'}
							maxW={'90%'}
							mb={'15px'}
						>
							<Link
								href="https://pay.kiwify.com.br/FfHZFhx"
								textDecor={'none'}
								color={'white'}
								_hover={{ color: '#d6ebff' }}
								maxW={'100%'}
								whiteSpace={'normal'}
							>
								QUERO ENTRAR PARA O PROTOCOLO VOCÊ LEVE AGORA
							</Link>
						</Button>
					</Flex>
					<Accordion maxW={'1000px'} marginTop={'40px'} allowMultiple>
						<AccordionItem>
							<h2>
								<AccordionButton className="accordion-button pink">
									<Box as="span" flex="1" textAlign="left">
										TEM ALGUMA COISA QUE VEM PELO CORREIO?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel className="panel" pb={4}>
								Este é um produto totalmente digital. Você não receberá nada pelo correio. O melhor disso tudo é que você terá acesso a ele
								em minutos . Você não precisa esperar que nada chegue à sua porta. Quero aproveitar a empolgação que você está sentindo
								agora e começar imediatamente. Você pode até mesmo fazer suas compras da semana 1 hoje e começar amanhã... ou começar hoje!
								Os arquivos estão em formato PDF. Após finalizar a compra, você será direcionado automaticamente para uma página onde poderá
								baixar e visualizar tudo no seu computador, tablet ou smartphone. Para aqueles que preferem um livro impresso, o Bônus de
								Início Rápido foi criado para isso. É uma versão abreviada de 20 páginas do guia principal que pode ser impressa e seguida
								como um livro impresso.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton className="accordion-button pink">
									<Box as="span" flex="1" textAlign="left">
										E SE NÃO FUNCIONAR PRA MIM
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel className="panel" pb={4}>
								Se, por algum motivo, este programa não funcionar para você, mesmo que você o tenha seguido exatamente como descrevi, não
								tenho nenhum problema em reembolsá-lo totalmente. Eu até cobri você por 7 dias completos, então se você estiver infeliz por
								qualquer motivo nos próximos 2 meses, você receberá seu dinheiro de volta . Se você não está satisfeito com o programa, não
								quero que tenha que pagar por ele. Acredito na construção de relacionamentos com meus clientes e sua satisfação é minha
								prioridade número 1.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton className="accordion-button pink">
									<Box as="span" flex="1" textAlign="left">
										PRECISO DE UM LIQUIDIFICADOR CARO OU OS INGREDIENTES SÃO DIFÍCEIS DE ENCONTRAR?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel className="panel" pb={4}>
								Com o aumento da popularidade desses mixs, os preços dos liquidificadores ficaram muito baratos. O mais importante é ter um
								liquidificador com motor potente. Embora o dobrador que você tem agora provavelmente funcione muito bem, se você está
								pensando seriamente em fazer uma grande mudança em sua saúde, mostro alguns dos liquidificadores de última geração. Os
								ingredientes não são difíceis de encontrar e, se forem, forneço uma “Lista de troca” completa que mostra substitutos fáceis
								de usar se você não conseguir encontrar algo
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton className="accordion-button pink">
									<Box as="span" flex="1" textAlign="left">
										NÃO TENHO MUITO TEMPO DURANTE O DIA, É DIFÍCIL ACOMPANHAR?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel className="panel" pb={4}>
								Se você não tem muito tempo durante o dia, este programa é PERFEITO para você . Meu cliente ideal é uma mãe ocupada que
								trabalha, vai para a escola, tem recados para fazer, crianças para deixar/pegar, etc. Desenhei este programa para ser super
								simples e levar alguns minutos por dia. Eu até forneço dicas sobre como cortar custos para economizar alguns minutos extras
								valiosos na preparação de seu smoothie. As receitas são rápidas de fazer e você pode saboreá-las logo depois de prepará-las
								ou levá-las com você. Você sempre terá uma refeição deliciosa e farta com você. E se você pode pressionar um botão em seu
								liquidificador, então você pode seguir este programa :)
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton className="accordion-button pink">
									<Box as="span" flex="1" textAlign="left">
										NÃO VOU GANHAR O PESO DE VOLTA?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel className="panel" pb={4}>
								Ao contrário de outras dietas, esta não é uma “solução rápida” . 21 dias é apenas o começo de uma vida com melhor saúde e um
								corpo mais magro. O comentário nº 1 que recebo sobre a Dieta do protocolo é que, depois de algumas semanas, os desejos por
								doces e fastfoods praticamente desapareceram. Isso torna muito fácil manter o peso. Também mostro exatamente como fazer a
								transição de volta aos seus padrões alimentares regulares após os 21 dias, incorporando os mixs à sua dieta para manter o
								peso. Na verdade, a maioria das pessoas ama tanto os esses mixs que não quer desistir deles depois dos 21 dias! Como alguns
								de meus clientes disseram, este é um programa completo de transformação de vida .
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton className="accordion-button pink">
									<Box as="span" flex="1" textAlign="left">
										PRECISO PERDER MAIS PESO, COMO FAÇO PARA CONTINUAR APÓS OS 21 DIAS?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel className="panel" pb={4}>
								A melhor parte do protocolo VOCÊ MAIS LEVE é que você pode usá-la pelo tempo que precisar, para perder tanto peso quanto
								quiser. Torno super simples continuar usando tudo o que você aprende nas primeiras 3 semanas para estender o programa pelas
								próximas semanas ou até meses. E cada semana adicional será tão divertida quanto as três primeiras! Meu objetivo é fornecer
								a você todas as ferramentas necessárias para continuar perdendo peso e ficando saudável pelo tempo que for necessário.
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
					<Img src="/logo.png" maxW={'20rem'} />
				</Flex>
			) : (
				<Text bg={'#5a5a5a'} p={'15px'} borderRadius={'5px'} fontWeight={'bold'} color={'#c7c7c7'}>
					SEU ACESSO SERÁ LIBERADO EM ALGUNS INSTANTES, ASSISTA O VÍDEO ATÉ O FINAL
				</Text>
			)}

			<Text className="footer-text" fontWeight={'500'} mb={0}>
				Copyright 2023 - Protocolo Você Mais Leve
			</Text>
			<Text className="footer-text" mt={0} fontWeight={'500'}>
				Todos os Direitos Reservados
			</Text>
			<Text className="footer-text" fontWeight={'500'}>
				Termos de Uso Privacidade
			</Text>
			<Text className="footer-text" fontWeight={'500'}>
				Todos os Direitos Reservados
			</Text>
			<Text className="footer-text" fontWeight={'500'} p={'0 5%'}>
				“Este site não tem vínculo com nenhuma outra plataforma digital ou a qualquer entidade relacionada a redes sociais. Depois que você
				sair das redes sociais, a responsabilidade não é deles e sim do nosso site.”
			</Text>
		</Flex>
	);
}

export default App;
