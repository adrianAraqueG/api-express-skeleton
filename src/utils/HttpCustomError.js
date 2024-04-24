/**
 * CustomError@Utils
 * your-app-name
 * 
 */
class CustomError extends Error {
    constructor (message, statusCode) {
        super(message);
        this.statusCode = statusCode || 500;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}



/**
 * 400 -> 499
 * 
 */
class BadRequestError extends CustomError {
    constructor (message) {
        super(message || 'Bad Request', 400);
    }
}

class UnauthorizedError extends CustomError {
    constructor (message) {
        super(message || 'Unauthorized', 401);
    }
}

class PaymentRequiredError extends CustomError {
    constructor (message) {
        super(message || 'Payment Required', 402);
    }
}

class ForbiddenError extends CustomError {
    constructor (message) {
        super(message || 'Forbidden', 403);
    }
}

class NotFoundError extends CustomError {
    constructor (message) {
        super(message || 'Not Found', 404);
    }
}

class MethodNotAllowedError extends CustomError {
    constructor (message) {
        super(message || 'Method Not Allowed', 405);
    }
}

class NotAcceptableError extends CustomError {
    constructor (message) {
        super(message || 'Not Acceptable', 406);
    }
}

class ProxyAuthRequiredError extends CustomError {
    constructor (message) {
        super(message || 'Proxy Authentication Required', 407);
    }
}

class RequestTimeoutError extends CustomError {
    constructor (message) {
        super(message || 'Request Timeout', 408);
    }
}

class ConflictError extends CustomError {
    constructor (message) {
        super(message || 'Conflict', 409);
    }
}

class GoneError extends CustomError {
    constructor (message) {
        super(message || 'Gone', 410);
    }
}

class LenghtRequiredError extends CustomError {
    constructor (message) {
        super(message || 'Lenght Required', 411);
    }
}

class PreconditionFailedError extends CustomError {
    constructor (message) {
        super(message || 'PreconditionFailed', 412);
    }
}

class URITooLargeError extends CustomError {
    constructor (message) {
        super(message || 'URI Too Large', 413);
    }
}

class UnsupportedMediaTypeError extends CustomError {
    constructor (message) {
        super(message || 'Unsupported Media Type', 415);
    }
}

class RangeNotSatisfiableError extends CustomError {
    constructor (message) {
        super(message || 'Range Not Satisfiable', 416);
    }
}

class ExpectationFailedError extends CustomError {
    constructor (message) {
        super(message || 'Expectation Failed', 417);
    }
}

class ImATeapotError extends CustomError {
    constructor (message) {
        super(message || "I'm a teapot", 418);
    }
}

class MisdirectedRequestError extends CustomError {
    constructor (message) {
        super(message || 'Misdirected Request', 421);
    }
}

class UnprocessableEntityError extends CustomError {
    constructor (message) {
        super(message || 'Unprocessable Entity', 422);
    }
}

class LockedError extends CustomError {
    constructor (message) {
        super(message || 'Locked', 423);
    }
}

class FailedDependencyError extends CustomError {
    constructor (message) {
        super(message || 'Failed Dependency', 424);
    }
}

class TooEarlyError extends CustomError {
    constructor (message) {
        super(message || 'Too Early', 425);
    }
}

class UpgradeRequiredError extends CustomError {
    constructor (message) {
        super(message || 'Upgrade Required', 426);
    }
}

class PreconditionRequiredError extends CustomError {
    constructor (message) {
        super(message || 'Precondition Required', 428);
    }
}

class TooManyRequestsError extends CustomError {
    constructor (message) {
        super(message || 'Too Many Requests', 429);
    }
}

class RequestHeaderFieldsTooLargeError extends CustomError {
    constructor (message) {
        super(message || 'Request Header Fields Too Large', 431);
    }
}

class UnavailableForLegalReasonsError extends CustomError {
    constructor (message) {
        super(message || 'Unavailable For Legal Reasons', 451);
    }
}




/**
 * 500 -> 599
 * 
 */
class InternalServerError extends CustomError {
    constructor (message) {
        super(message || 'Internal Server Error', 500);
    }
}

class NotImplementedError extends CustomError {
    constructor (message) {
        super(message || 'Not Implemented', 501);
    }
}

class BadGatewayError extends CustomError {
    constructor (message) {
        super(message || 'Bad Gateway', 502);
    }
}

class ServiceUnavailableError extends CustomError {
    constructor (message) {
        super(message || 'Service Unavailable', 503);
    }
}

class GatewayTimeoutError extends CustomError {
    constructor (message) {
        super(message || 'Gateway Timeout', 504);
    }
}

class HTTPVersionNotSupportedError extends CustomError {
    constructor (message) {
        super(message || 'HTTP Version Not Supported', 505);
    }
}

class VariantAlsoNegotiatesError extends CustomError {
    constructor (message) {
        super(message || 'Variant Also Negotiates', 506);
    }
}

class InsufficientStorageError extends CustomError {
    constructor (message) {
        super(message || 'Insufficient Storage', 507);
    }
}

class LoopDetectedError extends CustomError {
    constructor (message) {
        super(message || 'Loop Detected', 508);
    }
}

class NotExtendedError extends CustomError {
    constructor (message) {
        super(message || 'Not Extended', 510);
    }
}

class NetworkAuthenticationRequiredError extends CustomError {
    constructor (message) {
        super(message || 'Network Authentication Required', 511);
    }
}



export default {
    BadRequestError,
    UnauthorizedError,
    PaymentRequiredError,
    ForbiddenError,
    NotFoundError,
    MethodNotAllowedError,
    NotAcceptableError,
    ProxyAuthRequiredError,
    RequestTimeoutError,
    ConflictError,
    GoneError,
    LenghtRequiredError,
    PreconditionFailedError,
    URITooLargeError,
    UnsupportedMediaTypeError,
    RangeNotSatisfiableError,
    ExpectationFailedError,
    ImATeapotError,
    MisdirectedRequestError,
    UnprocessableEntityError,
    LockedError,
    FailedDependencyError,
    TooEarlyError,
    UpgradeRequiredError,
    PreconditionRequiredError,
    TooManyRequestsError,
    RequestHeaderFieldsTooLargeError,
    UnavailableForLegalReasonsError,
    InternalServerError,
    NotImplementedError,
    BadGatewayError,
    ServiceUnavailableError,
    GatewayTimeoutError,
    HTTPVersionNotSupportedError,
    VariantAlsoNegotiatesError,
    InsufficientStorageError,
    LoopDetectedError,
    NotExtendedError,
    NetworkAuthenticationRequiredError,
    CustomError
};
