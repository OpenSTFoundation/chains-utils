// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class RedeemRequested extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RedeemRequested entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RedeemRequested entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RedeemRequested", id.toString(), this);
  }

  static load(id: string): RedeemRequested | null {
    return store.get("RedeemRequested", id) as RedeemRequested | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get beneficiary(): Bytes {
    let value = this.get("beneficiary");
    return value.toBytes();
  }

  set beneficiary(value: Bytes) {
    this.set("beneficiary", Value.fromBytes(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasLimit(): BigInt {
    let value = this.get("gasLimit");
    return value.toBigInt();
  }

  set gasLimit(value: BigInt) {
    this.set("gasLimit", Value.fromBigInt(value));
  }

  get nonce(): BigInt {
    let value = this.get("nonce");
    return value.toBigInt();
  }

  set nonce(value: BigInt) {
    this.set("nonce", Value.fromBigInt(value));
  }

  get redeemer(): Bytes {
    let value = this.get("redeemer");
    return value.toBytes();
  }

  set redeemer(value: Bytes) {
    this.set("redeemer", Value.fromBytes(value));
  }

  get redeemerProxy(): Bytes {
    let value = this.get("redeemerProxy");
    return value.toBytes();
  }

  set redeemerProxy(value: Bytes) {
    this.set("redeemerProxy", Value.fromBytes(value));
  }

  get cogateway(): Bytes {
    let value = this.get("cogateway");
    return value.toBytes();
  }

  set cogateway(value: Bytes) {
    this.set("cogateway", Value.fromBytes(value));
  }

  get redeemRequestHash(): Bytes {
    let value = this.get("redeemRequestHash");
    return value.toBytes();
  }

  set redeemRequestHash(value: Bytes) {
    this.set("redeemRequestHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get uts(): BigInt {
    let value = this.get("uts");
    return value.toBigInt();
  }

  set uts(value: BigInt) {
    this.set("uts", Value.fromBigInt(value));
  }
}

export class RedeemRevoked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RedeemRevoked entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RedeemRevoked entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RedeemRevoked", id.toString(), this);
  }

  static load(id: string): RedeemRevoked | null {
    return store.get("RedeemRevoked", id) as RedeemRevoked | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get redeemer(): Bytes {
    let value = this.get("redeemer");
    return value.toBytes();
  }

  set redeemer(value: Bytes) {
    this.set("redeemer", Value.fromBytes(value));
  }

  get redeemRequestHash(): Bytes {
    let value = this.get("redeemRequestHash");
    return value.toBytes();
  }

  set redeemRequestHash(value: Bytes) {
    this.set("redeemRequestHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get uts(): BigInt {
    let value = this.get("uts");
    return value.toBigInt();
  }

  set uts(value: BigInt) {
    this.set("uts", Value.fromBigInt(value));
  }
}

export class RedeemRejected extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RedeemRejected entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RedeemRejected entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RedeemRejected", id.toString(), this);
  }

  static load(id: string): RedeemRejected | null {
    return store.get("RedeemRejected", id) as RedeemRejected | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get redeemer(): Bytes {
    let value = this.get("redeemer");
    return value.toBytes();
  }

  set redeemer(value: Bytes) {
    this.set("redeemer", Value.fromBytes(value));
  }

  get redeemRequestHash(): Bytes {
    let value = this.get("redeemRequestHash");
    return value.toBytes();
  }

  set redeemRequestHash(value: Bytes) {
    this.set("redeemRequestHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get uts(): BigInt {
    let value = this.get("uts");
    return value.toBigInt();
  }

  set uts(value: BigInt) {
    this.set("uts", Value.fromBigInt(value));
  }
}
