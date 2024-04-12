package business.book;

/*
 * TODO: Create a record constructor with fields corresponding to the fields in the
 * book table of your database.
 */

public record Book(long bookId, String title, String author, String description,
				   int price,
				   int rating,
				   boolean isPublic,
				   boolean isFeatured,
				   long categoryId) {
	public Book(long bookId, String title, String author, String description,
				int price,
				int rating,
				boolean isPublic,
				boolean isFeatured,
				long categoryId) {
		this.bookId = bookId;
		this.title = title;
		this.author = author;
		this.description = description;
		this.price = price;
		this.rating = rating;
		this.isPublic = isPublic;
		this.isFeatured = isFeatured;
		this.categoryId = categoryId;
	}
}
