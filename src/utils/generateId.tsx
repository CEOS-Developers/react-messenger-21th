function generateId(): string {
  return crypto.randomUUID();
}

export default generateId;
