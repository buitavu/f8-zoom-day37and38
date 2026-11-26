import DataFetcher from "../../components/DataFetcher";
import style from "./RenderPropsDemo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function RenderPropsDemo() {
  return (
    <div>
      <h2>RenderProp:</h2>
      <div className={cx("wrapper")}>
        <div className={cx("posts-list")}>
          <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
            {({ data, loading, error }) => {
              if (loading) return <div>...Loading post</div>;
              if (error) return <div>Error: {error}</div>;
              return (
                <div>
                  <h3>Posts</h3>
                  {data.map((post) => {
                    return <div key={post.id}>{post.title}</div>;
                  })}
                </div>
              );
            }}
          </DataFetcher>
        </div>
        <div className={cx("user-list")}>
          <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
            {({ data, loading, error }) => {
              if (loading) return <div>...Loading user</div>;
              if (error) return <div>Error: {error}</div>;
              return (
                <div>
                  <h3>User</h3>
                  {data.map((user) => {
                    return (
                      <div key={user.id}>
                        {user.name} - {user.email}
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </DataFetcher>
        </div>
      </div>
    </div>
  );
}

export default RenderPropsDemo;
