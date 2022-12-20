import { Button, Col, Form, Input, Row, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { todosRemainingSelector } from "../../redux/selectors";
import Todo from "../Todo";

import todosSlice from "../../redux/slices/todos";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);
  const [form] = Form.useForm();

  const handleFormSubmit = (value) => {
    dispatch(
      todosSlice.actions.addTodo({
        ...value,
        id: uuidv4(),
        completed: false,
      })
    );

    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleFormSubmit}>
      <Row style={{ height: "calc(100% - 40px)" }}>
        <Col
          span={24}
          style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
        >
          {todoList.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.content}
              prioriry={todo.priority}
              completed={todo.completed}
            />
          ))}
        </Col>
        <Col span={24}>
          <Input.Group style={{ display: "flex", paddingTop: "2rem" }} compact>
            <Form.Item
              style={{ width: "inherit" }}
              name="content"
              rules={[
                {
                  required: true,
                  message: "Please enter to do content",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="priority" initialValue="Medium">
              <Select>
                <Select.Option value="High" label="High">
                  <Tag color="red">High</Tag>
                </Select.Option>
                <Select.Option value="Medium" label="Medium">
                  <Tag color="blue">Medium</Tag>
                </Select.Option>
                <Select.Option value="Low" label="Low">
                  <Tag color="gray">Low</Tag>
                </Select.Option>
              </Select>
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Input.Group>
        </Col>
      </Row>
    </Form>
  );
}
