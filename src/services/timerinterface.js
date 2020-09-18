export function timerInterval(scope) {

    return {

        setInterval: scope.setInterval.bind(scope),

        clearInterval: scope.clearInterval.bind(scope)

    }

}