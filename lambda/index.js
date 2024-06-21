const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a Calculadora Guille, puedes realizar suma, resta, multiplicación, división, exponenciación o raíz cuadrada. ¿Qué te gustaría intentar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes decir hola para saludarme. ¿Cómo puedo ayudarte?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Adiós!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no sé de eso. Por favor, intenta de nuevo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Sesión terminada: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

// Manejo de suma
const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'sumaintent';
    },
    handle(handlerInput) {
        const numuno = parseInt(handlerInput.requestEnvelope.request.intent.slots.numuno.value, 10);
        const numdos = parseInt(handlerInput.requestEnvelope.request.intent.slots.numdos.value, 10);
        const result = numuno + numdos;

        return handlerInput.responseBuilder
            .speak(`El resultado de la suma de ${numuno} y ${numdos} es ${result}.`)
            .getResponse();
    }
};

// Manejo de resta
const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'restaintent';
    },
    handle(handlerInput) {
        const numuno = parseInt(handlerInput.requestEnvelope.request.intent.slots.numuno.value, 10);
        const numdos = parseInt(handlerInput.requestEnvelope.request.intent.slots.numdos.value, 10);
        const result = numuno - numdos;

        return handlerInput.responseBuilder
            .speak(`La resta de ${numuno} y ${numdos} es ${result}.`)
            .getResponse();
    }
};

// Manejo de división
const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'divisionintent';
    },
    handle(handlerInput) {
        const numuno = parseInt(handlerInput.requestEnvelope.request.intent.slots.numuno.value, 10);
        const numdos = parseInt(handlerInput.requestEnvelope.request.intent.slots.numdos.value, 10);
        if (numdos === 0) {
            return handlerInput.responseBuilder
                .speak('No se puede dividir por cero. Por favor, proporciona otro número.')
                .getResponse();
        }
        const result = numuno / numdos;

        return handlerInput.responseBuilder
            .speak(`La división de ${numuno} entre ${numdos} es ${result}.`)
            .getResponse();
    }
};

// Manejo de multiplicación
const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'multiplicacionintent';
    },
    handle(handlerInput) {
        const numuno = parseInt(handlerInput.requestEnvelope.request.intent.slots.numuno.value, 10);
        const numdos = parseInt(handlerInput.requestEnvelope.request.intent.slots.numdos.value, 10);
        const result = numuno * numdos;

        return handlerInput.responseBuilder
            .speak(`La multiplicación de ${numuno} por ${numdos} es ${result}.`)
            .getResponse();
    }
};

// Manejo de potenciación
const PotenciacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'potenciacionintent';
    },
    handle(handlerInput) {
        const numuno = parseInt(handlerInput.requestEnvelope.request.intent.slots.numuno.value, 10);
        const numdos = parseInt(handlerInput.requestEnvelope.request.intent.slots.numdos.value, 10);
        const result = Math.pow(numuno, numdos);

        return handlerInput.responseBuilder
            .speak(`La potencia de ${numuno} elevado a ${numdos} es ${result}.`)
            .getResponse();
    }
};

// Manejo de raíz cuadrada
const RaizIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'raizintent';
    },
    handle(handlerInput) {
        const numuno = parseInt(handlerInput.requestEnvelope.request.intent.slots.numuno.value, 10);
        const result = Math.sqrt(numuno);

        return handlerInput.responseBuilder
            .speak(`La raíz cuadrada de ${numuno} es ${result}.`)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas con lo que pediste. Por favor, intenta de nuevo.';
        console.log(`~~~~ Error manejado: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        DivisionIntentHandler,
        MultiplicacionIntentHandler,
        PotenciacionIntentHandler,
        RaizIntentHandler
    )
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('sample/calculadora-guille/v1.0')
    .lambda();
