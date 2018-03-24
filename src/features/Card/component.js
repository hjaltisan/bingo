import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const CardRow = ({ numbers }) => {
    const cols = numbers.map(number => <div key={number} className={styles.column}>{number}</div>)
    return (
        <div className={styles.row}>
            {cols}
        </div>
    )
}

CardRow.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number),
}

const Card = () => {
    const card = [[15,6,4,13,9],[17,28,21,30,23],[45,41,0,35,38],[60,50,54,51,57],[75,65,73,69,74]]
    // todo: fix the numbers input into cardRow, it should be a row, not a column...
    return (
        <div className={styles.card}>
            <div className={styles.header}>This is a card header</div>
            <div className={styles.container}>
                <div className={styles.left}>Left side</div>
                <div className={styles.grid}>
                    <div className={styles.bingo}><div>B</div><div>I</div><div>N</div><div>G</div><div>O</div></div>
                    <CardRow numbers={card[0]} />
                    <CardRow numbers={card[1]} />
                    <CardRow numbers={card[2]} />
                    <CardRow numbers={card[3]} />
                    <CardRow numbers={card[4]} />
                </div>
                <div className={styles.right}>Right side</div>
            </div>
            <div className={styles.footer}>This is a card footer</div>
        </div>
    )
}

export default Card
