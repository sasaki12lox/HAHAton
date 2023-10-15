<template>
	<div class="wrapper header">
		<div class="left">
			<h1>Настройки безопасности</h1>
			<span>Для защиты ваших карт и счетов</span>
		</div>
		<div class="right">
			<img src="../assets/svg/zamok.svg" alt="zamok">
		</div>
	</div>
	<div class="wrapper card__list">
		<div class="card__header">
			Карты и счета
		</div>
		<div v-for="card in cards" class="card__item" :key="card.id">
			<div class="card__left">
				<img src="../assets/svg/card.svg" alt="Карта">
			</div>
			<div class="card__right">
				<h1>{{ card.name }}</h1>
				<span>{{ card.score }} {{ card.currency }}</span>
				<h2 v-if="card.credit">Задолженность {{ card.arrears }} {{ card.currency }}</h2>
			</div>
		</div>
		<div class="card__new">
			<h1><span>+</span></h1>
			<span>Новая карта или счёт</span>
		</div>
	</div>
	<div class="wrapper clear">
		<div class="clear__item"><div><img src="../assets/svg/qr.svg" alt="QR"></div><span>QR</span></div>
		<div class="clear__item"><div><img src="../assets/svg/sbp.svg" alt="sbp"></div><span>По номеру телефона</span></div>
		<div class="clear__item"><div><img src="../assets/svg/phone.svg" alt="Phone"></div><span>Оплата мобильного</span></div>
	</div>
	<div class="wrapper trippleround maps__container">
		<h1>Отделения</h1>
        <router-link to="/maps">
            <span>
                Узнайте о нагруженности отделения
            </span>
        </router-link>
	</div>
	<div class="wrapper trippleround sbere">
		<h1>Сбережения</h1>
		<h2>Начните копить уже сегодня</h2>
		<span>Открыть счет или вклад</span>
	</div>
</template>

<script>
//@ts-check
/**
 * @typedef {{
 * 		currency: string
 * 		score: number
 * 		credit: boolean
 * 		arrears?: number
 * 		id: number
 * 		name: string
 * }} Card
 */
    export default {
		data: () => ({
			/**@type {Card[]} */
			cards: [
				{
					credit: false,
					currency: '₽',
					score: 484.97,
					id: 1234,
					name: 'Зарплата'
				},
				{
					credit: true,
					currency: '₽',
					score: 484.97,
					arrears: 0,
					id: 4321,
					name: 'Кредитка'
				}
			]
		})
    }
</script>

<style lang="scss">
	.wrapper:is(.header) {
		.left {
			h1 {
				font-size: 18px;
				font-weight: 700;
				margin-bottom: 15px;
			}
			span {
				color: #88919B;
				font-size: 14px;
				font-weight: 500;
			}
		}
		.right {
			margin-top: -43px;
		}
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.sbere {
		h1 {
			font-size: 16px;
			font-weight: 700;
		}
		h2 {
			font-size: 14px;
			font-weight: 500;
			margin-top: 23px;
			margin-bottom: 10px;
		}
		span {
			color: #4196F1;
			font-size: 14px;
			font-weight: 500;
		}
	}
	.maps {
		&__container {
			display: flex;
			flex-direction: column;
			h1 {
				font-size: 16px;
				margin-bottom: 18px;
			}
			span {
				color: #4196F1;
				font-weight: 500;
				font-size: 16px;
			}
			background: url('../assets/png/map.png');
			background-repeat: no-repeat;
			background-size: cover;
		}	
	}
	.wrapper:is(.clear) {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		padding: 0;
	}
	.clear__item {
		width: 119px;
		height: 114px;
		border-radius: 20px;
		background: #1B1F27;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		div { 
			padding: 10px;
			border-radius: 50%;
			width: 54px;
			height: 54px;
			background: #343E4A;
			margin-top: 10px;
		}
		div img {
			width: 100%;
			height: 100%;
		}
		span {
			text-align: center;
			margin-bottom: 5px;
		}
	}
	.card {
		&__list {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
		}
		&__item {
			.card__left {
				img {
					width: 42px;
				}
				margin-right: 9px;
			}
			.card__right {
				h1 {
					margin-bottom: 6px;
					font-weight: 500;
				}
				span {
					color: #4096F2;
					font-weight: 500;
				}
				h2 {
					color: #88919B;
				}
			}
			display: flex;
			flex-direction: row;
			&:not(:last-child) {
				margin-bottom: 24px;
			}
		}
		&__new {
			h1 {
				border-radius: 50%;
				background: #262F3A;
				aspect-ratio: 1;
				width: 42px;
				height: 42px;
				display: flex;
				justify-content: center;
				align-items: flex-end;
				span {
					color: #4096F2;
					font-size: 39px;
					font-weight: 300;
					text-align: center;
				}
				margin-right: 9px;
			}
			display: flex;
			align-items: center;
			span {
				color: #4096F2;
			}
		}
		&__header {
			font-size: 13px;
			margin-bottom: 24px;
		}
	}
</style>