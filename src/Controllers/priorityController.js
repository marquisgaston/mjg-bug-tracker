const colors = ["#b33a3a", "#ff6700", "#32cd32"]
// eslint-disable-next-line
export default (priority)=> {
    const level = ["High", "Medium", "Low"]
    return {
        level:(level[priority-1]),
        color:colors[priority-1]
    }
}