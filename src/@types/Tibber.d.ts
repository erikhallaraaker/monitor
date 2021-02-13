declare namespace Tibber {
    export interface Viewer {
        login: string;
        userId: string;
        name: string;
        accountType: string[];
        homes: Home[];
        home: Home;
    }

    export interface Address {
        address1: string;
        address2: string;
        address3: string;
        postalCode: string;
        city: string;
        country: string;
        latitude: string;
        longitude: string;
    }

    export interface ApiEndpoint {
        feedUrl: string;
        queryUrl: string;
        apiKey: string;
    }

    export interface Config {
        active: boolean;
        // Endpoint configuration.
        apiEndpoint: ApiEndpoint;
        // Query configuration.
        homeId?: string;
        timestamp?: boolean;
        power?: boolean;
        lastMeterConsumption?: boolean;
        accumulatedConsumption?: boolean;
        accumulatedProduction?: boolean;
        accumulatedCost?: boolean;
        accumulatedReward?: boolean;
        currency?: boolean;
        minPower?: boolean;
        averagePower?: boolean;
        maxPower?: boolean;
        powerProduction?: boolean;
        minPowerProduction?: boolean;
        maxPowerProduction?: boolean;
        lastMeterProduction?: boolean;
        powerFactor?: boolean;
        voltagePhase1?: boolean;
        voltagePhase2?: boolean;
        voltagePhase3?: boolean;
        currentL1?: boolean;
        currentL2?: boolean;
        currentL3?: boolean;
        signalStrength?: boolean;
    }

    export interface Consumption {
        homeId?: string;
        from: string;
        to: string;
        unitPrice: number;
        unitPriceVAT: number;
        consumption: number;
        consumptionUnit: string;
        cost: number;
        currency: string;
    }

    export interface ContactInfo {
        email: string;
        mobile: string;
    }

    export interface CurrentSubscription {
        id: string;
        validFrom: string;
        validTo: null;
        status: string;
        priceInfo: PriceInfo;
    }

    export interface Home {
        id: string;
        timeZone: string;
        appNickname: string;
        appAvatar: HomeAvatar;
        size: number;
        type: HomeType;
        numberOfResidents: number;
        primaryHeatingSource: HeatingSource;
        hasVentilationSystem: boolean;
        mainFuseSize: number;
        address: Address;
        owner: LegalEntity;
        consumption: HomeConsumptionConnection;
        meteringPointData: MeteringPointData;
        currentSubscription: Subscription;
        subscriptions: Subscription[];
        production: HomeProductionConnection;
        features: HomeFeatures;
    }

    export interface HomeConsumptionConnection {
        pageInfo: HomeConsumptionPageInfo;
        nodes: Consumption[];
        edges: HomeConsumptionEdge[];
    }

    export interface HomeConsumptionEdge {
        cursor: string;
        node: Consumption;
    }

    export interface HomeConsumptionPageInfo {
        endCursor: string;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string;
        count: number;
        currency: string;
        totalCost: number;
        totalConsumption: number;
        filtered: number;
    }

    export interface HomeFeatures {
        realTimeConsumptionEnabled: boolean;
    }

    export interface HomeProductionConnection {
        pageInfo: HomeProductionPageInfo;
        nodes: Production[];
        edges: HomeProductionEdge[];
    }

    export interface HomeProductionEdge {
        cursor: string;
        node: Production;
    }

    export interface HomeProductionPageInfo {
        endCursor: string;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string;
        count: number;
        currency: string;
        totalProfit: number;
        totalProduction: number;
        filtered: number;
    }

    export interface LegalEntity {
        id: string;
        firstName: string;
        isCompany: boolean;
        name: string;
        middleName: string;
        lastName: string;
        organizationNo: string;
        language: string;
        contactInfo: ContactInfo;
        address: Address;
    }

    export interface LiveMeasurement {
        timestamp: string;
        power: number;
        lastMeterConsumption: number;
        accumulatedConsumption: number;
        accumulatedProduction: number;
        accumulatedCost: number;
        accumulatedReward: number;
        currency: string;
        minPower: number;
        averagePower: number;
        maxPower: number;
        powerProduction: number;
        minPowerProduction: number;
        maxPowerProduction: number;
        lastMeterProduction: number;
        powerFactor: number;
        voltagePhase1: number;
        voltagePhase2: number;
        voltagePhase3: number;
        currentL1: number;
        currentL2: number;
        currentL3: number;
        signalStrength: number;
    }

    export interface MeteringPointData {
        consumptionEan: string;
        gridCompany: string;
        gridAreaCode: string;
        priceAreaCode: string;
        productionEan: null;
        energyTaxType: string;
        vatType: string;
        estimatedAnnualConsumption: number;
    }

    export interface Price {
        homeId?: string;
        total: number;
        energy: number;
        tax: number;
        startsAt: string;
        level: PriceLevel;
    }

    export interface PriceInfo {
        current?: Price;
        today?: Price[];
        tomorrow?: Price[];
        range?: SubscriptionPriceConnection; // Should be SubscriptionPriceConnection
    }

    export interface Production {
        from: string;
        to: string;
        unitPrice: number;
        unitPriceVAT: number;
        production: number;
        productionUnit: string;
        profit: number;
        currency: string;
    }

    // export interface Query {
    //     id: string;
    //     type: string;
    //     payload?: QueryPayload;
    // }

    // export interface QueryPayload {
    //     extensions: any;
    //     operationName: string;
    //     query: string;
    //     token: string;
    //     variables: any;
    // }

    export interface Subscription {
        id: string;
        subscriber: LegalEntity;
        validFrom: string;
        validTo: null;
        status: string;
        priceInfo: PriceInfo;
    }

    export interface SubscriptionPriceConnection {
        pageInfo: SubscriptionPriceConnectionPageInfo;
        edges: SubscriptionPriceEdge[];
        nodes: Price[];
    }

    export interface SubscriptionPriceConnectionPageInfo {
        endCursor: string;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string;
        resolution: string;
        currency: string;
        count: number;
        precision: string;
        minEnergy: number;
        minTotal: number;
        maxEnergy: number;
        maxTotal: number;
    }

    export interface SubscriptionPriceEdge {
        cursor: string;
        node: Price;
    }

    /**
     * --------- ENUMS ---------
     */

    export enum AppScreen {
        HOME = "HOME",
        REPORTS = "REPORTS",
        CONSUMPTION = "CONSUMPTION",
        COMPARISON = "COMPARISON",
        DISAGGREGATION = "DISAGGREGATION",
        HOME_PROFILE = "HOME_PROFILE",
        CUSTOMER_PROFILE = "CUSTOMER_PROFILE",
        METER_READING = "METER_READING",
        NOTIFICATIONS = "NOTIFICATIONS",
        INVOICES = "INVOICES",
    }

    export enum EnergyResolution {
        HOURLY = "HOURLY",
        DAILY = "DAILY",
        WEEKLY = "WEEKLY",
        MONTHLY = "MONTHLY",
        ANNUAL = "ANNUAL",
    }

    export enum HeatingSource {
        AIR2AIR_HEATPUMP = "AIR2AIR_HEATPUMP",
        ELECTRICITY = "ELECTRICITY",
        GROUND = "GROUND",
        DISTRICT_HEATING = "DISTRICT_HEATING",
        ELECTRIC_BOILER = "ELECTRIC_BOILER",
        AIR2WATER_HEATPUMP = "AIR2WATER_HEATPUMP",
        OTHER = "OTHER",
    }

    export enum HomeAvatar {
        APARTMENT = "APARTMENT",
        ROWHOUSE = "ROWHOUSE",
        FLOORHOUSE1 = "FLOORHOUSE1",
        FLOORHOUSE2 = "FLOORHOUSE2",
        FLOORHOUSE3 = "FLOORHOUSE3",
        COTTAGE = "COTTAGE",
        CASTLE = "CASTLE",
    }

    export enum HomeType {
        APARTMENT = "APARTMENT",
        ROWHOUSE = "ROWHOUSE",
        HOUSE = "HOUSE",
        COTTAGE = "COTTAGE",
    }

    export enum PriceLevel {
        // The price is greater than 90 % and smaller than 115 % compared to average price.
        NORMAL = "NORMAL",
        // The price is greater than 60 % and smaller or equal to 90 % compared to average price.
        CHEAP = "CHEAP",
        // The price is smaller or equal to 60 % compared to average price.
        VERY_CHEAP = "VERY_CHEAP",
        // The price is greater or equal to 115 % and smaller than 140 % compared to average price.
        EXPENSIVE = "EXPENSIVE",
        // The price is greater or equal to 140 % compared to average price.
        VERY_EXPENSIVE = "VERY_EXPENSIVE",
    }

    export enum PriceResolution {
        HOURLY = "HOURLY",
        DAILY = "DAILY",
    }
}
