function ContactMe() {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required></input>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default ContactMe;
