resource "random_id" "s3_object_key_identifier" {
  byte_length = 8
}

resource "aws_s3_object" "object" {
  bucket = "elasticbeanstalk-ap-northeast-2-039174979026"
  key    = "${random_id.s3_object_key_identifier.hex}-docker-compose.yaml"
  source = "docker-compose.yaml"
}
resource "aws_elastic_beanstalk_environment" "elasticbeanstalk_env" {
  name                = "Palmspring-env"
  application         = "palmspring"
  solution_stack_name = "64bit Amazon Linux 2023 v4.0.1 running Docker"
}
