import useApi from "../../hooks/useApi";
import useToggle from "../../hooks/useToggle";

function CustomHooksDemo() {
  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
    refetch: refetchPosts,
  } = useApi("https://jsonplaceholder.typicode.com/posts");

  const {
    data: users,
    loading: usersLoading,
    error: usersError,
    refetch: refetchUsers,
  } = useApi("https://jsonplaceholder.typicode.com/users");

  // Toggle states
  const [showPosts, togglePosts] = useToggle(false);
  const [showUsers, toggleUsers] = useToggle(false);
  const [darkMode, toggleTheme] = useToggle(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#222",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h3>Custom Hooks</h3>

      {/* Theme Section */}
      <section>
        <h2>Theme Section</h2>

        <button onClick={toggleTheme}>
          {darkMode ? "Switch to Light" : "Switch to Dark"}
        </button>
      </section>

      {/* Posts Section */}
      <section>
        <h2>Posts Section</h2>

        <button onClick={togglePosts}>
          {showPosts ? "Hide Posts" : "Show Posts"}
        </button>

        <button onClick={refetchPosts}>Refetch Posts</button>

        {showPosts && (
          <div>
            {postsLoading && <p>Loading posts...</p>}

            {postsError && <p>Error: {postsError}</p>}

            {!postsLoading &&
              !postsError &&
              posts?.map((post) => (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              ))}
          </div>
        )}
      </section>

      {/* Users Section */}
      <section>
        <h2>Users Section</h2>

        <button onClick={toggleUsers}>
          {showUsers ? "Hide Users" : "Show Users"}
        </button>

        <button onClick={refetchUsers}>Refetch Users</button>

        {showUsers && (
          <div>
            {usersLoading && <p>Loading users...</p>}

            {usersError && <p>Error: {usersError}</p>}

            {!usersLoading &&
              !usersError &&
              users?.map((user) => (
                <div key={user.id}>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>
              ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default CustomHooksDemo;
