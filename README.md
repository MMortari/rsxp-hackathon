# Educac

## Overview
O aplicativo tem o intúito de ensinar as matérias do Ensino Médio através da programação.

## Instalation
1. Abra seu terminal, vá até uma pasta que deseja colocar o projeto;
2. Clone o repositório;
	`git clone https://github.com/MMortari/rsxp-hackathon.git`
3. Entre na pasta do projeto;
	`cd rsxp-hackathon`
4. Aqui temos 2 pastas, a do **servidor** e a do **aplicativo mobile**, vamos começar pelo servidor:
	`cd server`
	1. Primeiro, precisamos instalar o base de dados, faremos isso utilizando o docker;
		`docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres:11`
	2. Instalamos as dependências;
		`yarn` ou `npm install`
	3. Criamos a base de dados;
		`yarn database` ou `npm run database`
	4. Colocamos o servidor para rodar;
		`yarn dev`
5. Agora vamos para o **aplicativo**:
	`cd ../mobile`
	1. Instalamos as dependências;
		`yarn` ou `npm install`
	2. Para android;
		`react-native run-android`
	3. Para IOS;
		1. `cd ios`
		2. `pod install`
		3. `react-native run-ios`
